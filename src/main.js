import Vue from 'vue'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from './routes/routes'
import {store} from './store/store'
import vueSmoothScroll from 'vue-smooth-scroll'
import ElementUI from 'element-ui';
import AOS from 'aos'
import Vuelidate from 'vuelidate'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import {TweenMax, TweenLite, TimelineMax, Linear, Back, Sine } from 'gsap';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';

Vue.use(Vuelidate)
Vue.use(VueRouter)
Vue.use(vueSmoothScroll)
Vue.use(ElementUI);

AOS.init();

const router = new VueRouter({
    routes,
    mode: 'history',
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created() {
      firebase.initializeApp({
          // apiKey: "AIzaSyD_XN61w9a7VzAkQfNbDMTKU43zJVA21tA",
          // authDomain: "vue-auth-240f1.firebaseapp.com",
          // databaseURL: "https://vue-auth-240f1.firebaseio.com",
          // projectId: "vue-auth-240f1",
          // storageBucket: "gs://vue-auth-240f1.appspot.com/",
          // messagingSenderId: "585672582719"
          apiKey: "AIzaSyDOcEfoVVGJMbejKDfWtJwbK-1o_ZGlqHk",
          authDomain: "bogdan-mihaileanu.firebaseapp.com",
          databaseURL: "https://bogdan-mihaileanu.firebaseio.com",
          projectId: "bogdan-mihaileanu",
          storageBucket: "bogdan-mihaileanu.appspot.com",
          messagingSenderId: "90380178896",
          appId: "1:90380178896:web:0cdd069262749d31"
      });
      firebase.auth().onAuthStateChanged(
        (user) => {
          if (user) {
            this.$store.dispatch('authenticate/autoSignin', user)
          }
        })
  }
})
