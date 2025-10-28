<template>
  <div class="min-h-screen bg-black pt-24 pb-16">
    <!-- Background Effects -->
    <div class="fixed inset-0 bg-black" />
    <div class="fixed inset-0 bg-gradient-to-br from-green-500/6 via-transparent to-purple-500/8" />
    
    <Navigation />

    <div class="container mx-auto px-4 sm:px-6 relative z-10">
      <!-- Header -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-4 mb-8">
          <div class="w-1 h-12 bg-gradient-to-b from-green-500 to-green-500/50"></div>
          <h1 class="text-4xl md:text-6xl font-display">
            <span class="text-white">TOELATINGS</span>
            <span class="text-gradient-primary">VRAGENLIJST</span>
          </h1>
          <div class="w-1 h-12 bg-gradient-to-b from-green-500 to-green-500/50"></div>
        </div>
        <p class="text-gray-300 text-lg max-w-3xl mx-auto font-body">
          Vul deze vragenlijst in om toegang te krijgen tot onze community events en raves.
        </p>
      </div>

      <!-- Notice Banner -->
      <div class="max-w-3xl mx-auto mb-6">
        <div class="bg-yellow-500/20 border border-yellow-500/50 rounded-lg p-4">
          <p class="text-yellow-500 font-body text-sm text-center">
            ⚠️ Demo Mode: Form submissions are temporarily disabled for preview deployment.
          </p>
        </div>
      </div>

      <!-- Form Container -->
      <div class="max-w-3xl mx-auto">
        <div class="card-professional p-8">
          <form @submit.prevent="submitForm" class="space-y-8">
            <!-- Personal Information -->
            <div>
              <h2 class="text-gradient-primary text-2xl font-heading mb-6">Persoonlijke Informatie</h2>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-white font-heading mb-2">Voornaam *</label>
                  <input 
                    v-model="form.firstName" 
                    type="text" 
                    required
                    class="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-green-500/50 transition-colors"
                    placeholder="Je voornaam"
                  />
                </div>
                <div>
                  <label class="block text-white font-heading mb-2">Achternaam *</label>
                  <input 
                    v-model="form.lastName" 
                    type="text" 
                    required
                    class="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-green-500/50 transition-colors"
                    placeholder="Je achternaam"
                  />
                </div>
              </div>
            </div>

            <!-- Contact Information -->
            <div>
              <h2 class="text-gradient-primary text-2xl font-heading mb-6">Contactgegevens</h2>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-white font-heading mb-2">E-mail *</label>
                  <input 
                    v-model="form.email" 
                    type="email" 
                    required
                    class="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-green-500/50 transition-colors"
                    placeholder="je@email.nl"
                  />
                </div>
                <div>
                  <label class="block text-white font-heading mb-2">Telefoonnummer *</label>
                  <input 
                    v-model="form.phone" 
                    type="tel" 
                    required
                    class="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-green-500/50 transition-colors"
                    placeholder="+31 6 12345678"
                  />
                </div>
              </div>
            </div>

            <!-- Background Information -->
            <div>
              <h2 class="text-gradient-primary text-2xl font-heading mb-6">Achtergrond</h2>
              <div class="space-y-6">
                <div>
                  <label class="block text-white font-heading mb-2">Leeftijd *</label>
                  <input 
                    v-model="form.age" 
                    type="number" 
                    min="18" 
                    required
                    class="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-green-500/50 transition-colors"
                    placeholder="18"
                  />
                </div>
                <div>
                  <label class="block text-white font-heading mb-2">Welke muziekstijl spreekt jou het meest aan?</label>
                  <select 
                    v-model="form.musicPreference" 
                    class="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-500/50 transition-colors"
                  >
                    <option value="">Selecteer een optie</option>
                    <option value="hardcore">Hardcore</option>
                    <option value="raw-hardcore">Raw Hardcore</option>
                    <option value="uptempo">Uptempo</option>
                    <option value="industrial">Industrial</option>
                    <option value="experimental">Experimental</option>
                    <option value="other">Anders</option>
                  </select>
                </div>
                <div>
                  <label class="block text-white font-heading mb-2">Welke ervaring heb je met hardcore events?</label>
                  <select 
                    v-model="form.eventExperience" 
                    class="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-500/50 transition-colors"
                  >
                    <option value="">Selecteer een optie</option>
                    <option value="beginner">Beginner - Nieuwe in de scene</option>
                    <option value="some">Sommige ervaring</option>
                    <option value="experienced">Ervaren</option>
                    <option value="veteran">Veteran</option>
                  </select>
                </div>
                <div>
                  <label class="block text-white font-heading mb-2">Ben je al lid van een hardcore community?</label>
                  <select 
                    v-model="form.communityMember" 
                    class="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-500/50 transition-colors"
                  >
                    <option value="">Selecteer een optie</option>
                    <option value="yes">Ja</option>
                    <option value="no">Nee</option>
                    <option value="sometimes">Soms</option>
                  </select>
                </div>
              </div>
            </div>

            <!-- Additional Information -->
            <div>
              <h2 class="text-gradient-primary text-2xl font-heading mb-6">Extra Informatie</h2>
              <div>
                <label class="block text-white font-heading mb-2">Wil je nog iets toevoegen?</label>
                <textarea 
                  v-model="form.additionalInfo" 
                  rows="4"
                  class="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-green-500/50 transition-colors resize-none"
                  placeholder="Vertel ons iets over jezelf, je interesses, of stel een vraag..."
                ></textarea>
              </div>
            </div>

            <!-- Submit Button -->
            <div class="flex justify-center pt-6">
              <button 
                type="submit" 
                :disabled="isSubmitting"
                class="btn-professional px-12 py-4 text-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {{ isSubmitting ? 'Verzenden...' : 'VERSTUUR VRAGENLIJST' }}
              </button>
            </div>
          </form>

          <!-- Success Message -->
          <Transition name="fade">
            <div v-if="isSuccess" class="mt-8 p-6 bg-green-500/20 border border-green-500/50 rounded-lg text-center">
              <p class="text-green-500 font-heading text-lg mb-2">✓ Verzonden!</p>
              <p class="text-gray-300 font-body">Bedankt voor je inzending. We nemen zo snel mogelijk contact met je op.</p>
            </div>
          </Transition>

          <!-- Error Message -->
          <Transition name="fade">
            <div v-if="error" class="mt-8 p-6 bg-red-500/20 border border-red-500/50 rounded-lg text-center">
              <p class="text-red-500 font-heading text-lg mb-2">✗ Fout</p>
              <p class="text-gray-300 font-body">{{ error }}</p>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  age: '',
  musicPreference: '',
  eventExperience: '',
  communityMember: '',
  additionalInfo: ''
})

const isSubmitting = ref(false)
const isSuccess = ref(false)
const error = ref('')

const submitForm = async () => {
  isSubmitting.value = true
  error.value = ''
  isSuccess.value = false

  // Backend temporarily disabled for Vercel deployment
  // TODO: Enable MongoDB connection for production
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // const response = await $fetch('/api/submissions', {
    //   method: 'POST',
    //   body: form.value
    // })

    // if (response.success) {
      isSuccess.value = true
      // Reset form
      form.value = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        age: '',
        musicPreference: '',
        eventExperience: '',
        communityMember: '',
        additionalInfo: ''
      }
      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' })
    // }
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : 'Er is een fout opgetreden. Probeer het opnieuw.'
    error.value = errorMessage
  } finally {
    isSubmitting.value = false
  }
}
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

