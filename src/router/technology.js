export default {
    path: 'technology',
    name: 'technology',
    component: resolve => {
      require(['@/view/technology/index.vue'], resolve);
    },
    children: [
//      {
//          path: 'detail',
//          component: resolve => {require(['@/view/technology/detail.vue'], resolve);}
//      }
    ]
}