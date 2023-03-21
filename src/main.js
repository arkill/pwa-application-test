import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import { register } from 'register-service-worker'

register('/sw.js')

const app = createApp(App)

// Přidejte následující řádek pro povolení PWA režimu
app.config.productionTip = false

// Přidejte následující řádek pro nastavení názvu a ikony aplikace
app.config.globalProperties.$pwa = {
  name: 'Moje PWA aplikace',
  icon: '/img/icons/android-chrome-192x192.png',
}

app.mount('#app')
