import Vue from 'vue'
import App from './App.vue'
import router from "./router/index"
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper),

new Vue({
  router,
  
  render: h => h(App),
}).$mount('#app')
window.navigator.geolocation.getCurrentPosition(loc)
function loc(){
  alert(loc)
}

alert("HELLO , WELCOME TO OUR WEBSITES")