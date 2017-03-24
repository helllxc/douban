import Vue from 'vue'
import VueRouter from 'vue-router'
// import Hello from '@/components/Hello';
import home from '../components/page/Home.vue';
import detail from '../components/page/Detail.vue'
Vue.use(VueRouter);
import text from '../components/page/text.vue';
import image from '../components/image.vue'
import discovery from '../components/page/discovery.vue'

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: home,
      children:[{
        path:'text',
        component:text
      },{
        path:'image',
        component:image
      },{
        path:'discovery',
        component:discovery
      }]
    },{
      path:'/detail/:id',
      component:detail
    }
  ]
})
