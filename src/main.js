// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import store from '@/store'

// axios配置
import Axios from 'axios'
import {configAxios} from '@/lib/config-axios'
// axios-自定义配置
configAxios.init(Axios)
Object.defineProperty(Vue.prototype, '$http', {
    value: Axios
})

// 移动端ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

// 自定义组件
import hView from '@/components';
Vue.use(hView);

// 样式
import './styles'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
