// Shared state for scroll lock
let isScrolling = false
let scrollTimeout: ReturnType<typeof setTimeout> | null = null

// Mobile touch state
let touchStartY = 0
let touchEndY = 0
let touchStartTime = 0
let isTouchScrolling = false

export const useScrollSnap = () => {
  const getSections = () => {
    if (typeof document === 'undefined') return []
    return Array.from(document.querySelectorAll('.scroll-snap-section')) as HTMLElement[]
  }

  const getCurrentSectionIndex = () => {
    const sections = getSections()
    if (sections.length === 0) return 0
    
    const scrollY = window.scrollY + window.innerHeight * 0.3 // Use upper third of viewport
    const vh = window.innerHeight
    
    // Find which section's top is closest to current scroll position
    let closestIndex = 0
    let closestDistance = Infinity
    
    for (let i = 0; i < sections.length; i++) {
      const section = sections[i]
      const rect = section.getBoundingClientRect()
      const sectionTop = window.scrollY + rect.top
      const sectionBottom = sectionTop + rect.height
      const distance = Math.abs(sectionTop - scrollY)
      
      // Check if we're in this section (account for navbar offset)
      const navOffset = 64
      if (scrollY >= sectionTop - navOffset && scrollY < sectionBottom) {
        return i
      }
      
      // Track closest for fallback
      if (distance < closestDistance) {
        closestDistance = distance
        closestIndex = i
      }
    }
    
    return closestIndex
  }

  const scrollToNext = () => {
    if (isScrolling) return
    
    const sections = getSections()
    if (sections.length === 0) return
    
    const currentIndex = getCurrentSectionIndex()
    const currentSection = sections[currentIndex]
    
    // Check if current section has internal scrolling and if we're at the bottom
    if (canScrollInSection(currentSection) && !isAtSectionBottom(currentSection)) {
      // Scroll within the section first
      const scrollDistance = window.innerHeight * 0.8 // Scroll 80% of viewport
      const targetScroll = Math.min(
        currentSection.scrollTop + scrollDistance,
        currentSection.scrollHeight - currentSection.clientHeight
      )
      
      currentSection.scrollTo({
        top: targetScroll,
        behavior: 'smooth'
      })
      return
    }
    
    // If at bottom of section (or no internal scroll), move to next section
    if (currentIndex < sections.length - 1) {
      isScrolling = true
      const nextSection = sections[currentIndex + 1]
      const rect = nextSection.getBoundingClientRect()
      const targetTop = window.scrollY + rect.top
      
      window.scrollTo({
        top: targetTop,
        behavior: 'smooth'
      })
      
      setTimeout(() => {
        isScrolling = false
      }, 1000)
    }
  }

  const scrollToPrevious = () => {
    if (isScrolling) return
    
    const sections = getSections()
    if (sections.length === 0) return
    
    const currentIndex = getCurrentSectionIndex()
    const currentSection = sections[currentIndex]
    
    // Check if current section has internal scrolling and if we're at the top
    if (canScrollInSection(currentSection) && !isAtSectionTop(currentSection)) {
      // Scroll within the section first
      const scrollDistance = window.innerHeight * 0.8 // Scroll 80% of viewport
      const targetScroll = Math.max(
        currentSection.scrollTop - scrollDistance,
        0
      )
      
      currentSection.scrollTo({
        top: targetScroll,
        behavior: 'smooth'
      })
      return
    }
    
    // If at top of section (or no internal scroll), move to previous section
    if (currentIndex > 0) {
      isScrolling = true
      const prevSection = sections[currentIndex - 1]
      const rect = prevSection.getBoundingClientRect()
      const targetTop = window.scrollY + rect.top
      
      window.scrollTo({
        top: targetTop,
        behavior: 'smooth'
      })
      
      if (scrollTimeout) clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => {
        isScrolling = false
      }, 1000)
    } else {
      // Scroll to top
      isScrolling = true
      window.scrollTo({ top: 0, behavior: 'smooth' })
      
      if (scrollTimeout) clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => {
        isScrolling = false
      }, 1000)
    }
  }

  const handleWheel = (e: WheelEvent) => {
    if (isScrolling) {
      e.preventDefault()
      return
    }
    
    const sections = getSections()
    if (sections.length === 0) return
    
    const currentIndex = getCurrentSectionIndex()
    const currentSection = sections[currentIndex]
    
    // Check if section has internal scrolling
    if (canScrollInSection(currentSection)) {
      const isAtBottom = isAtSectionBottom(currentSection)
      const isAtTop = isAtSectionTop(currentSection)
      const delta = e.deltaY
      
      // If trying to scroll down but at bottom, move to next section
      if (delta > 0 && isAtBottom && currentIndex < sections.length - 1) {
        e.preventDefault()
        scrollToNext()
        return
      }
      
      // If trying to scroll up but at top, move to previous section
      if (delta < 0 && isAtTop && currentIndex > 0) {
        e.preventDefault()
        scrollToPrevious()
        return
      }
      
      // Otherwise, allow normal scrolling within section
      return
    }
    
    // No internal scroll, use section-by-section scrolling
    e.preventDefault()
    
    const delta = e.deltaY
    const threshold = 30
    
    if (Math.abs(delta) > threshold) {
      if (scrollTimeout) clearTimeout(scrollTimeout)
      
      scrollTimeout = setTimeout(() => {
        if (delta > 0) {
          scrollToNext()
        } else {
          scrollToPrevious()
        }
      }, 100)
    }
  }

  // Mobile touch handlers - detect scroll within sections vs between sections
  const handleTouchStart = (e: TouchEvent) => {
    if (isScrolling) return
    touchStartY = e.touches[0].clientY
    touchStartTime = Date.now()
    isTouchScrolling = false
  }

  const handleTouchMove = (e: TouchEvent) => {
    // Don't interfere - let native scrolling work
    touchEndY = e.touches[0].clientY
  }

  const handleTouchEnd = (e: TouchEvent) => {
    if (isScrolling || isTouchScrolling) return
    
    touchEndY = e.changedTouches[0].clientY
    const diff = touchStartY - touchEndY
    const timeDiff = Date.now() - touchStartTime
    const absDiff = Math.abs(diff)
    
    // Only proceed if it's a significant swipe
    const distanceThreshold = 50
    const speedThreshold = 0.2
    const speed = absDiff / Math.max(timeDiff, 1)
    
    if (absDiff < distanceThreshold && speed < speedThreshold) {
      // Small movement, don't do anything
      return
    }
    
    // Get current section
    const sections = getSections()
    if (sections.length === 0) return
    
    const currentIndex = getCurrentSectionIndex()
    const currentSection = sections[currentIndex]
    
    // Check if current section has internal scrolling
    if (canScrollInSection(currentSection)) {
      const atBottom = isAtSectionBottom(currentSection)
      const atTop = isAtSectionTop(currentSection)
      
      // If trying to scroll down (swipe up) and at bottom, move to next section
      if (diff > 0 && atBottom && currentIndex < sections.length - 1) {
        isTouchScrolling = true
        isScrolling = true
        scrollToNext()
        setTimeout(() => {
          isTouchScrolling = false
          isScrolling = false
        }, 1000)
        return
      }
      
      // If trying to scroll up (swipe down) and at top, move to previous section
      if (diff < 0 && atTop && currentIndex > 0) {
        isTouchScrolling = true
        isScrolling = true
        scrollToPrevious()
        setTimeout(() => {
          isTouchScrolling = false
          isScrolling = false
        }, 1000)
        return
      }
      
      // Otherwise, allow natural scrolling within section
      // Don't do anything - let the section scroll naturally
      return
    }
    
    // No internal scroll, allow moving between sections
    isTouchScrolling = true
    isScrolling = true
    
    setTimeout(() => {
      if (diff > 0) {
        scrollToNext()
      } else {
        scrollToPrevious()
      }
      
      setTimeout(() => {
        isTouchScrolling = false
        isScrolling = false
      }, 1000)
    }, 50)
  }

  // Check if user can scroll within a section
  const canScrollInSection = (section: HTMLElement): boolean => {
    const scrollHeight = section.scrollHeight
    const clientHeight = section.clientHeight
    return scrollHeight > clientHeight
  }

  // Check if user is at bottom of section's scrollable content
  const isAtSectionBottom = (section: HTMLElement): boolean => {
    const scrollTop = section.scrollTop
    const scrollHeight = section.scrollHeight
    const clientHeight = section.clientHeight
    const threshold = 5 // 5px threshold for "at bottom"
    return scrollTop + clientHeight >= scrollHeight - threshold
  }

  // Check if user is at top of section's scrollable content
  const isAtSectionTop = (section: HTMLElement): boolean => {
    return section.scrollTop <= 5 // 5px threshold
  }

  // Handle scroll snap after user stops scrolling (for mobile)
  const handleScrollSnap = () => {
    if (isScrolling) return
    
    const sections = getSections()
    if (sections.length === 0) return
    
    const currentScroll = window.scrollY
    const vh = window.innerHeight
    
    // Find which section is currently most visible in the viewport
    let currentSection: HTMLElement | null = null
    let bestVisibility = 0
    
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect()
      const sectionTop = rect.top + window.scrollY
      const sectionBottom = sectionTop + rect.height
      
      // Calculate how much of the section is visible in viewport
      const viewportTop = window.scrollY
      const viewportBottom = window.scrollY + vh
      
      const visibleTop = Math.max(viewportTop, sectionTop)
      const visibleBottom = Math.min(viewportBottom, sectionBottom)
      const visibleHeight = Math.max(0, visibleBottom - visibleTop)
      const visibility = visibleHeight / Math.min(vh, rect.height)
      
      if (visibility > bestVisibility) {
        bestVisibility = visibility
        currentSection = section
      }
    })
    
    if (!currentSection) return
    
    // Check if this section has internal scrolling
    const hasInternalScroll = canScrollInSection(currentSection)
    
    if (hasInternalScroll) {
      // If section has internal scroll, don't snap to next section
      // User needs to scroll through all content first
      // Only align if we're way off (more than 50% of viewport)
      const rect = currentSection.getBoundingClientRect()
      const sectionTop = window.scrollY + rect.top
      const distance = Math.abs(sectionTop - currentScroll)
      const threshold = vh * 0.5 // Only snap if very far off
      
      if (distance > threshold) {
        isScrolling = true
        window.scrollTo({
          top: sectionTop,
          behavior: 'smooth'
        })
        setTimeout(() => {
          isScrolling = false
        }, 800)
      }
    } else {
      // No internal scroll, allow snapping as before
      const rect = currentSection.getBoundingClientRect()
      const sectionTop = window.scrollY + rect.top
      const distance = Math.abs(sectionTop - currentScroll)
      const threshold = vh * 0.2
      
      if (distance > threshold && bestVisibility > 0.3) {
        isScrolling = true
        window.scrollTo({
          top: sectionTop,
          behavior: 'smooth'
        })
        setTimeout(() => {
          isScrolling = false
        }, 800)
      }
    }
  }

  return {
    scrollToNext,
    scrollToPrevious,
    handleWheel,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    handleScrollSnap,
    canScrollInSection,
    isAtSectionBottom,
    isAtSectionTop
  }
}
