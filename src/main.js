import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import Dexie from 'dexie';

const db = new Dexie('myDatabase');
db.version(1).stores({
  formData: '++id,name,email'
});

db.formData.add({
    name: this.formData.name,
    email: this.formData.email
  }).then(() => {
    console.log('Data saved to IndexedDB');
  });

createApp(App).mount('#app')
