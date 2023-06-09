import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import "@fontsource/poppins/"
import "@fontsource/poppins/500.css"
import "@fontsource/poppins/600.css"
import "@fontsource/poppins/700.css"
import "@fontsource/poppins/900.css"

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {
    faClock,
    faPhone,
    faEnvelope,
    faAward,
    faLock,
    faGraduationCap,
    faArrowRight,
    faDiagramProject,
    faBriefcase,
    faChartSimple,
    faPlane,
    faEarthAmericas,
    faInbox,
    faQuoteRight,
    faLocationDot,
    faAngleRight
} from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faClock,
    faPhone,
    faEnvelope,
    faFacebookF,
    faTwitter,
    faLinkedinIn,
    faAward,
    faLock,
    faPenToSquare,
    faGraduationCap,
    faArrowRight,
    faDiagramProject,
    faBriefcase,
    faChartSimple,
    faPlane,
    faEarthAmericas,
    faInbox,
    faQuoteRight,
    faLocationDot,
    faAngleRight)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')


