import Vue from 'vue'
import Router from 'vue-router'
import Technology from './technology'

Vue.use(Router)

export default new Router({
  //mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: resolve => {
        require(['@/view'], resolve);
      },
      children:[
        Technology  
      ]
    } 
  ]
})
