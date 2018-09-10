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
    path:'/xiaoxi/',
    component:xiaoxi.default,
    name:'消息'
  },
  {
    path:'/xiangmu/',
    component:xiangmu.default,
    name:'项目'
  },
  {
    path:'/rili/',
    component:rili.default,
    name:'日历'
  },
  {
    path:'/wangpan/',
    component:wangpan.default,
    name:'网盘'
  },
  {
    path:'/tongxunlu/',
    component:tongxunlu.default,
    name:'通讯录'
  },
  {
    // 如果用户随便输入地址，转到首页
    path:'*',
    redirect:'/xiaoxi/'
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
  store,
  router,
  components:{
    App
  }
})
