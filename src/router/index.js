import Vue from 'vue'
import VueRouter from 'vue-router'
// import Hello from '@/components/Hello';
import home from '../components/page/Home.vue';
import detail from '../components/page/Detail.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: home
    },{
      path:'/detail/:id',
      component:detail
    }
  ]
})
