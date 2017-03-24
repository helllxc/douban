// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
import router from './router/index.js';
import  VueResource from 'vue-resource';
Vue.use(VueResource)
import Vuex from 'vuex';
Vue.use(Vuex);
import VueScroll from 'vue-scroll';
Vue.use(VueScroll);
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)

import $ from 'jquery'
console.log($);
window.$ = $;

var store = new Vuex.Store({
   state:{
     id:'',
     loading:true,
     show:true,
     load:'',
     shown:false,
     iscomment:'',
     share:''
   },
  mutations:{
     setId:function(state,data){
        state.id = data;
     },
    setLoading:function(state,data){
       state.loading = data;
    },
    setShown:function(state,data){
      state.show = data;
    },
    setLoad:function(state,data){
      state.load = data;
    },
    setToast:function (state,data) {
      state.shown = data;
    },
    setComment:function(state,data){
      state.iscomment = data;
    },
    setShare:function(state,data){
      state.share = data;
    }
  }
})


new Vue({
  router,
  store
  // template: '<App/>',
  // components: { App }
}).$mount('#app')
