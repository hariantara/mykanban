// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueFire from 'vuefire'
import Firebase from 'firebase'
import vuex from 'vuex'
import store from './store'

Vue.use(vuex)
Vue.use(VueFire)
Vue.use(Firebase)
Vue.config.productionTip = false

var config = {
  apiKey: 'AIzaSyC-LjThJ568jD9pUCm3_E0rmYQQashEt5E',
  authDomain: 'test-5188f.firebaseapp.com',
  databaseURL: 'https://test-5188f.firebaseio.com',
  projectId: 'test-5188f',
  storageBucket: 'test-5188f.appspot.com',
  messagingSenderId: '566477772298'
}
Firebase.initializeApp(config)
Vue.prototype.$db = Firebase.database()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
