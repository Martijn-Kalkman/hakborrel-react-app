<template>
  <div class="relative bg-black overflow-x-hidden min-h-screen flex flex-col">
    <!-- Background Effects - Matching home page -->
    <div class="fixed inset-0 bg-black" />
    <div class="fixed inset-0 bg-gradient-to-br from-green-500/6 via-transparent to-purple-500/8" />
    
    <!-- Atmospheric Glows - Matching home page -->
    <div class="fixed top-1/4 left-1/4 w-64 h-64 bg-green-500/6 rounded-full blur-[150px] animate-smooth-flow" style="animation-duration: 20s;" />
    <div class="fixed top-3/4 right-1/4 w-64 h-64 bg-purple-500/6 rounded-full blur-[150px] animate-smooth-flow" style="animation-duration: 25s; animation-delay: 5s;" />
    
    <!-- Simplified Noise Texture - Matching home page -->
    <div class="fixed inset-0 opacity-[0.015]" style="background-image: url('data:image/svg+xml,%3Csvg width=\'200\' height=\'200\' viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence baseFrequency=\'0.5\' numOctaves=\'2\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.3\'/%3E%3C/svg%3E');" />
    
    <!-- Diagonal Pattern - Matching home page -->
    <div 
      class="absolute inset-0 opacity-3"
      :style="{
        backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 4px, rgba(255, 255, 255, 0.01) 4px, rgba(255, 255, 255, 0.01) 8px)'
      }"
    />

    <Navigation />

    <!-- Main Content -->
    <div class="relative z-10 container mx-auto px-4 sm:px-6 pt-20 md:pt-24 pb-12 md:pb-16 w-full max-w-2xl flex-1 flex flex-col justify-center">
      <!-- Header Section -->
      <div class="text-center mb-8 sm:mb-12 md:mb-16">
        <!-- Title with vertical bars - Matching EventsSection style -->
        <div class="inline-flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          <div class="w-1 h-8 sm:h-12 bg-gradient-to-b from-purple-500 to-purple-500/50"></div>
          <h1 class="text-4xl md:text-6xl font-display">
            <span class="text-white">Secret Chapters</span>
          </h1>
          <div class="w-1 h-8 sm:h-12 bg-gradient-to-b from-purple-500 to-purple-500/50"></div>
        </div>

        <!-- Subtitle -->
        <p class="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto mb-3 leading-relaxed font-body">
          Betreed het verborgen rijk van HAKBORREL
        </p>
        <p class="text-gray-400 text-sm sm:text-base font-body max-w-xl mx-auto">
          Toegang tot exclusieve content, privé-evenementen en onvertelde verhalen
        </p>
      </div>

      <!-- Code Entry Card - Using card-professional -->
      <div class="card-professional p-4 sm:p-6 md:p-8">
        <!-- Lock Icon -->
        <div class="text-center mb-8">
          <div class="inline-flex items-center justify-center bg-purple-500/20 p-4 rounded-xl border border-purple-500/30 mb-4">
            <Icon name="heroicons:lock-closed" size="32px" class="text-purple-500 sm:w-8 sm:h-8" />
          </div>
        </div>

        <!-- Code Input Form -->
        <form @submit.prevent="submitCode" class="space-y-6">
          <div>
            <label for="access-code" class="block text-gray-300 text-sm font-body mb-3 text-center">
              Voer Toegangscode In
            </label>
            <input
              id="access-code"
              v-model="code"
              type="text"
              autocomplete="off"
              maxlength="20"
              :disabled="isSubmitting"
              placeholder="Voer je code in"
              :class="[
                'w-full bg-black/40 backdrop-blur-sm border rounded-lg px-6 py-4 text-white font-body text-center text-base focus:outline-none transition-all',
                'placeholder:text-gray-500',
                error 
                  ? 'border-red-500/50 focus:border-red-500 focus:ring-2 focus:ring-red-500/30' 
                  : 'border-purple-500/30 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30',
                'disabled:opacity-50 disabled:cursor-not-allowed',
                'min-h-[44px] sm:min-h-0'
              ]"
            />
            
            <!-- Error Message -->
            <p v-if="error" class="mt-3 text-red-400 text-sm font-body text-center">
              {{ error }}
            </p>
            <p v-else class="mt-3 text-gray-500 text-xs font-body text-center">
              Dit is een beperkt gebied. Alleen leden met geldige codes kunnen doorgaan.
            </p>
          </div>

          <!-- Submit Button - Using btn-professional -->
          <button
            type="submit"
            :disabled="!code || code.trim().length === 0 || isSubmitting"
            class="btn-professional btn-secondary w-full py-4 text-base font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 min-h-[44px] sm:min-h-0"
          >
            <span v-if="isSubmitting" class="flex items-center justify-center gap-2">
              <Icon name="heroicons:arrow-path" class="h-5 w-5 animate-spin" />
              Verifiëren...
            </span>
            <span v-else class="flex items-center justify-center gap-2">
              <span>Ga Verder</span>
              <Icon name="heroicons:arrow-right" size="16px" />
            </span>
          </button>
        </form>

        <!-- Alternative Access -->
        <div class="mt-8 pt-6 border-t border-white/10">
          <p class="text-gray-400 text-sm font-body text-center mb-3">
            Heb je geen code?
          </p>
          <NuxtLink
            to="/#media"
            class="block text-center text-purple-400 hover:text-purple-300 transition-colors font-body text-sm"
          >
            Toegang tot Openbare Media →
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const code = ref('')
const error = ref('')
const isSubmitting = ref(false)

// Valid access codes (in production, this would be server-validated)
const validCodes = [
  'HAKBORREL2024',
  'SECRET2024',
  'UNDERGROUND',
  'test' // For testing purposes
]

const submitCode = async () => {
  error.value = ''
  
  if (!code.value || code.value.trim().length === 0) {
    error.value = 'Voer een toegangscode in'
    return
  }

  isSubmitting.value = true

  // Simulate verification delay
  await new Promise(resolve => setTimeout(resolve, 1200))

  const enteredCode = code.value.trim().toUpperCase()
  const isValid = validCodes.some(validCode => validCode.toUpperCase() === enteredCode)

  if (isValid) {
    // Store access in session storage
    if (process.client) {
      sessionStorage.setItem('secret_access', 'true')
      sessionStorage.setItem('secret_code_entered', 'true')
    }
    
    // Redirect to homepage
    router.push('/')
  } else {
    error.value = 'Ongeldige toegangscode. Probeer het opnieuw.'
    code.value = ''
    isSubmitting.value = false
  }
}

// SEO
useHead({
  title: 'Secret Chapters - HAKBORREL',
  meta: [
    {
      name: 'description',
      content: 'Betreed het verborgen rijk van HAKBORREL. Exclusieve content en privé-evenementen wachten op je.'
    },
    {
      name: 'robots',
      content: 'noindex, nofollow'
    }
  ]
})
</script>

<style scoped>
/* Match home page styling */

/* Mobile-specific improvements */
@media (max-width: 640px) {
  /* Prevent iOS zoom on input focus */
  input[type="text"] {
    font-size: 16px;
  }
  
  /* Ensure footer text doesn't overflow */
  p {
    word-break: break-word;
  }
}
</style>
