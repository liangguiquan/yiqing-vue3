import { createApp } from 'vue'
import App from './App.vue'
import './styles/global.css'

// vant
import { Tab, Tabs } from 'vant'

import router from './router'


const app = createApp(App)


// echarts有3种使用的方法
// 1. 组件内引用后，直接使用。

// 2. 在main.js中全局引用echarts
// import * as echarts from 'echarts'
// app.config.globalProperties.$echarts = echarts  // 把echarts绑定到原型

// 3. 把echarts开发成插件再使用
import echarts from './plugins/echarts'
app.use(echarts);


app.use(Tab)
app.use(Tabs)
app.use(router)
app.mount('#app')
