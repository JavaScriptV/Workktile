import Vue from 'vue'
import App from './App.vue'
import Vuex  from 'vuex'
import VueRouter from 'vue-router'

Vue.use(Vuex)
Vue.use(VueRouter)

const rili = require('./components/rili/rili.vue');
const tongxunlu = require('./components/tongxunlu/tongxunlu.vue');
const wangpan = require('./components/wangpan/wangpan.vue');
const xiangmu = require('./components/xiangmu/xiangmu.vue');
const xiaoxi = require('./components/xiaoxi/xiaoxi.vue');

const r = [
  {
    path:'/rili',
    component:rili.default,
    name:'日历'
  }
]

// 路由初始化
const router = new VueRouter({
  // 这里的routes键必须是这么写
  routes:r
})
const store = new Vuex.Store({
  state:{
      count:0
  }
}) 
new Vue({
  el: '#app',
  // render: h => h(App)
  components:{
    App
  }
})
