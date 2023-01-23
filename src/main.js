import { createApp } from 'vue'
import App from './App.vue'
import ShoesList from '@/components/ShoesList' 

const app = createApp(App)
// create component vue kedalam tag html
app.component('shoes-list', ShoesList)
app.mount('#app')
