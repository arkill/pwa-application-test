<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<meta name="theme-color" content="#4DBA87">
<template>
  <form @submit.prevent="submitForm">
    <label for="name">Jméno:</label>
    <input type="text" id="name" v-model="formData.name" required>
    <br>
    <label for="email">Email:</label>
    <input type="email" id="email" v-model="formData.email" required>
    <br>
    <button type="submit">Odeslat</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        email: ''
      }
    };
  },
  methods: {
    submitForm() {
      if (navigator.onLine) {
        // Pokud je aplikace online, odešlete data
        this.sendData();
      } else {
        // Pokud je aplikace offline, uložte data do IndexedDB
        this.saveData();
      }
    },
    sendData() {
      // Odeslání dat pomocí HTTP požadavku
      // ...
    },
    saveData() {
      // Uložení dat do IndexedDB
      // ...
    }
  }
};
</script>
