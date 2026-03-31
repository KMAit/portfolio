import { createApp } from 'vue'
import App from './App.vue'

// Global styles — order matters: variables first, then animations
import './assets/styles/main.css'
import './assets/styles/animations.css'

createApp(App).mount('#app')
