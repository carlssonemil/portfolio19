import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faDribbble, faCodepen, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faGithub, faDribbble, faCodepen, faLinkedinIn, faEnvelope, faAngleLeft)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
