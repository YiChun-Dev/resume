import { createApp } from 'vue'
import App from './App.vue'

// 引入 FontAwesome 的 CSS 文件
import '@fortawesome/fontawesome-free/css/all.min.css'
// 引入 Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'
// 引入 Bootstrap JavaScript
import 'bootstrap'

import './style.css'

createApp(App).mount('#app')