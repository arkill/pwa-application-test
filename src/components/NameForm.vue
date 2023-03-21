<template>
  <form @submit.prevent="submit">
    <label>
      Jméno:
      <input v-model="name" required>
    </label>
    <button type="submit">Odeslat</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: '',
    }
  },
  methods: {
    submit() {
      const data = { name: this.name }

if (navigator.onLine) {
  // Aplikace je online, odešleme data
  fetch('https://webhook.site/f938b9c0-7230-46c5-a1dd-997fbd74a1e0/ef561183-80cb-4063-bd47-9c04e1edc263/1', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => {
      console.log('Odpověď:', response)
      this.name = ''
    })
    .catch(error => {
      console.error('Chyba:', error)
    })
} else {
  // Aplikace je offline, uložíme data do localStorage
  const offlineData = JSON.parse(localStorage.getItem('offlineData') || '[]')
  offlineData.push(data)
  localStorage.setItem('offlineData', JSON.stringify(offlineData))
  console.log('Data byla uložena offline:', data)
  this.name = ''
}
    },
    sendOfflineData() {
  const offlineData = JSON.parse(localStorage.getItem('offlineData') || '[]')
  if (offlineData.length > 0) {
    console.log('Odesílám uložená data:', offlineData)
    fetch('https://webhook.site/f938b9c0-7230-46c5-a1dd-997fbd74a1e0/ef561183-80cb-4063-bd47-9c04e1edc263/1', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(offlineData),
    })
      .then(response => {
        console.log('Odpověď:', response)
        localStorage.removeItem('offlineData')
      })
      .catch(error => {
        console.error('Chyba:', error)
      })
  } else {
    console.log('Nejsou žádná uložená data k odeslání.')
  }
},
  },
 
mounted() {
  window.addEventListener('online', this.sendOfflineData)
  if (navigator.onLine) {
    this.sendOfflineData()
  }
},
beforeUnmount() {
  window.removeEventListener('online', this.sendOfflineData)
},
}
</script>
