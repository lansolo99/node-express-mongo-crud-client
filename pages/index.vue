<template>
<form @submit.prevent="submitForm" class="mt-5 md:mt-20">

  <div class="container mx-auto max-w-screen-sm px-5">
    <div class="space-y-5">
      <!-- Title -->
      <h1 class="title text-xl font-bold">
        Vue client to Node/Express/Mongo API
      </h1>

      <!-- Nom -->
      <field 
        label="Name"

        v-model="contactForm.name"
      />

      <!-- SubscribedToChannel -->
      <field 
        label="Subscribed to channel"
        v-model="contactForm.subscribedToChannel"
      />

      <!-- Submit -->
      <button type="submit" class="px-4 py-2 lg:px-6 text-xl bg-purple-800 hover:bg-purple-900 font-bold rounded text-white">Send</button>
      
    </div>
  </div>
</form>
</template>

<script>
export default {
  name:"Index",
  data() {
    return {
      contactForm: {
        name: '',
        subscribedToChannel: '',
      }
    }
  },
  methods:{
    async submitForm(){    
      console.log(this.$config.apiUrl);
      try {
        const response = await this.$axios.$post(
          this.$config.apiUrl,
          this.contactForm
        )
        console.log(response)
      } catch (error) {
        console.error('error response:', error)
      }
    },
    setFormData() {
      const contactForm = this.contactForm
      const formData = new FormData()

      // Build
      for (let key in contactForm) {
        formData.append(key, contactForm[key])
      }

      // Log
      for (var pair of formData.entries()) {
        console.log(pair[0] + ', ' + pair[1])
      }

      return formData
    },
  }
}
</script>

