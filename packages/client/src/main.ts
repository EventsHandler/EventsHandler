import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { apolloClient } from './apollo'
import { createPinia } from 'pinia'

const app = createApp(App)

app.use(router)
app.use(createPinia())
app.provide(DefaultApolloClient, apolloClient)

app.mount('#app')
