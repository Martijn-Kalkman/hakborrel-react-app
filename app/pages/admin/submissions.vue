<template>
  <div class="min-h-screen bg-black pt-24 pb-16">
    <!-- Background Effects -->
    <div class="fixed inset-0 bg-black" />
    <div class="fixed inset-0 bg-gradient-to-br from-green-500/6 via-transparent to-purple-500/8" />
    
    <Navigation />

    <div class="container mx-auto px-4 sm:px-6 relative z-10">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-6xl font-display">
          <span class="text-white">ADMIN</span>
          <span class="text-gradient-primary"> PANEL</span>
        </h1>
        <p class="text-gray-300 text-lg font-body mt-4">
          Questionnaire Submissions
        </p>
        <div class="mt-6">
          <button 
            @click="exportToCSV"
            :disabled="submissions.length === 0 || loading"
            class="btn-professional disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center gap-2"
          >
            <Icon name="heroicons:arrow-down-tray" size="20px" />
            Export to CSV
          </button>
        </div>
      </div>

      <!-- Notice Banner -->
      <div class="mb-6">
        <div class="bg-yellow-500/20 border border-yellow-500/50 rounded-lg p-4">
          <p class="text-yellow-500 font-body text-sm text-center">
            ⚠️ Demo Mode: Admin panel is temporarily disabled for preview deployment.
          </p>
        </div>
      </div>

      <!-- Stats Cards -->
      <div v-if="stats" class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div class="card-professional p-6 text-center">
          <p class="text-4xl font-bold text-gradient-primary mb-2">{{ stats.total }}</p>
          <p class="text-gray-400 font-body">Total Submissions</p>
        </div>
        <div class="card-professional p-6 text-center">
          <p class="text-4xl font-bold text-gradient-secondary mb-2">{{ stats.thisWeek }}</p>
          <p class="text-gray-400 font-body">This Week</p>
        </div>
        <div class="card-professional p-6 text-center">
          <p class="text-4xl font-bold text-green-500 mb-2">{{ stats.today }}</p>
          <p class="text-gray-400 font-body">Today</p>
        </div>
      </div>

      <!-- Submissions List -->
      <div class="card-professional p-6">
        <div v-if="loading" class="text-center py-12">
          <p class="text-gray-400 font-body">Loading submissions...</p>
        </div>

        <div v-else-if="submissions.length === 0" class="text-center py-12">
          <p class="text-gray-400 font-body">No submissions yet.</p>
        </div>

        <div v-else class="overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="border-b border-white/10">
                <th class="text-left py-3 px-4 text-white font-heading">Name</th>
                <th class="text-left py-3 px-4 text-white font-heading">Email</th>
                <th class="text-left py-3 px-4 text-white font-heading">Phone</th>
                <th class="text-left py-3 px-4 text-white font-heading">Age</th>
                <th class="text-left py-3 px-4 text-white font-heading">Submitted</th>
              </tr>
            </thead>
            <tbody>
              <tr 
                v-for="submission in submissions" 
                :key="submission._id"
                class="border-b border-white/5 hover:bg-white/5 cursor-pointer transition-colors"
                @click="selectedSubmission = submission"
              >
                <td class="py-4 px-4">
                  <p class="text-white font-heading">{{ submission.firstName }} {{ submission.lastName }}</p>
                </td>
                <td class="py-4 px-4">
                  <p class="text-gray-400 font-body">{{ submission.email }}</p>
                </td>
                <td class="py-4 px-4">
                  <p class="text-gray-400 font-body">{{ submission.phone }}</p>
                </td>
                <td class="py-4 px-4">
                  <p class="text-gray-400 font-body">{{ submission.age }}</p>
                </td>
                <td class="py-4 px-4">
                  <p class="text-gray-400 font-body text-sm">{{ formatDate(submission.submittedAt) }}</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Submission Details Modal -->
      <Transition name="fade">
        <div 
          v-if="selectedSubmission" 
          class="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-8 z-50"
          @click="selectedSubmission = null"
        >
          <div class="card-professional max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8" @click.stop>
            <div class="flex justify-between items-center mb-8">
              <h2 class="text-gradient-primary text-2xl font-heading">Submission Details</h2>
              <button 
                @click="selectedSubmission = null"
                class="text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="heroicons:x-mark" size="24px" />
              </button>
            </div>

            <div class="space-y-8">
              <!-- Personal Info -->
              <div>
                <h3 class="text-white font-heading mb-4">Personal Information</h3>
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <p class="text-gray-400 font-body text-sm mb-1">First Name</p>
                    <p class="text-white font-body">{{ selectedSubmission.firstName }}</p>
                  </div>
                  <div>
                    <p class="text-gray-400 font-body text-sm mb-1">Last Name</p>
                    <p class="text-white font-body">{{ selectedSubmission.lastName }}</p>
                  </div>
                  <div>
                    <p class="text-gray-400 font-body text-sm mb-1">Age</p>
                    <p class="text-white font-body">{{ selectedSubmission.age }}</p>
                  </div>
                </div>
              </div>

              <!-- Contact Info -->
              <div>
                <h3 class="text-white font-heading mb-4">Contact Information</h3>
                <div class="space-y-2">
                  <div>
                    <p class="text-gray-400 font-body text-sm mb-1">Email</p>
                    <p class="text-white font-body">{{ selectedSubmission.email }}</p>
                  </div>
                  <div>
                    <p class="text-gray-400 font-body text-sm mb-1">Phone</p>
                    <p class="text-white font-body">{{ selectedSubmission.phone }}</p>
                  </div>
                </div>
              </div>

              <!-- Background Info -->
              <div>
                <h3 class="text-white font-heading mb-4">Background Information</h3>
                <div class="space-y-3">
                  <div>
                    <p class="text-gray-400 font-body text-sm mb-1">Music Preference</p>
                    <p class="text-white font-body">{{ selectedSubmission.musicPreference || 'N/A' }}</p>
                  </div>
                  <div>
                    <p class="text-gray-400 font-body text-sm mb-1">Event Experience</p>
                    <p class="text-white font-body">{{ selectedSubmission.eventExperience || 'N/A' }}</p>
                  </div>
                  <div>
                    <p class="text-gray-400 font-body text-sm mb-1">Community Member</p>
                    <p class="text-white font-body">{{ selectedSubmission.communityMember || 'N/A' }}</p>
                  </div>
                  <div v-if="selectedSubmission.additionalInfo">
                    <p class="text-gray-400 font-body text-sm mb-1">Additional Info</p>
                    <p class="text-white font-body">{{ selectedSubmission.additionalInfo }}</p>
                  </div>
                </div>
              </div>

              <!-- Timestamp -->
              <div>
                <p class="text-gray-400 font-body text-sm">Submitted on: {{ formatDateTime(selectedSubmission.submittedAt) }}</p>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'

const submissions = ref([])
const selectedSubmission = ref(null)
const loading = ref(true)

const stats = computed(() => {
  if (!submissions.value.length) return null

  const now = new Date()
  const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())

  const thisWeek = submissions.value.filter(sub => new Date(sub.submittedAt) >= weekAgo).length
  const todaySubmissions = submissions.value.filter(sub => new Date(sub.submittedAt) >= today).length

  return {
    total: submissions.value.length,
    thisWeek,
    today: todaySubmissions
  }
})

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('nl-NL', { 
    day: '2-digit', 
    month: 'short', 
    year: 'numeric' 
  })
}

const formatDateTime = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleString('nl-NL', { 
    day: '2-digit', 
    month: 'short', 
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

const loadSubmissions = async () => {
  // Backend temporarily disabled for Vercel deployment
  // TODO: Enable MongoDB connection for production
  try {
    loading.value = true
    // Simulate loading
    await new Promise(resolve => setTimeout(resolve, 500))
    
    // const response = await $fetch('/api/submissions')
    // submissions.value = response.submissions
    
    // Show empty state
    submissions.value = []
  } catch (error) {
    console.error('Failed to load submissions:', error)
  } finally {
    loading.value = false
  }
}

const exportToCSV = () => {
  if (submissions.value.length === 0) return

  // Define CSV headers
  const headers = [
    'First Name',
    'Last Name',
    'Email',
    'Phone',
    'Age',
    'Music Preference',
    'Event Experience',
    'Community Member',
    'Additional Info',
    'Submitted At'
  ]

  // Create CSV rows
  const rows = submissions.value.map(submission => {
    const submittedAt = new Date(submission.submittedAt).toLocaleString('nl-NL', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    })

    return [
      escapeCSV(submission.firstName),
      escapeCSV(submission.lastName),
      escapeCSV(submission.email),
      escapeCSV(submission.phone),
      escapeCSV(submission.age),
      escapeCSV(submission.musicPreference || ''),
      escapeCSV(submission.eventExperience || ''),
      escapeCSV(submission.communityMember || ''),
      escapeCSV(submission.additionalInfo || ''),
      submittedAt
    ].join(',')
  })

  // Combine headers and rows
  const csvContent = [headers.join(','), ...rows].join('\n')

  // Create and download file
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
  const link = document.createElement('a')
  const url = URL.createObjectURL(blob)
  
  link.setAttribute('href', url)
  link.setAttribute('download', `hakborrel-submissions-${new Date().toISOString().split('T')[0]}.csv`)
  link.style.visibility = 'hidden'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

const escapeCSV = (value) => {
  if (!value) return ''
  const stringValue = String(value)
  if (stringValue.includes(',') || stringValue.includes('"') || stringValue.includes('\n')) {
    return `"${stringValue.replace(/"/g, '""')}"`
  }
  return stringValue
}

onMounted(() => {
  loadSubmissions()
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

