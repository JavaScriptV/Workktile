import Vue from 'vue'
import App from './App.vue'
import Vuex  from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
      count:0
  }
}) 
new Vue({
  el: '#app',
  render: h => h(App)
})
