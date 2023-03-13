import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faClock, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faClock, faPhone, faEnvelope, faFacebook, faTwitter, faLinkedinIn)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')


