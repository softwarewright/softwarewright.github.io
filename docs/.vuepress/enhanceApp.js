import 'bootstrap/dist/css/bootstrap.min.css';
import 'hover.css/css/hover-min.css'
import 'vue2-animate/dist/vue2-animate.min.css'

import  SocialSharing from 'vue-social-sharing';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLinkedin, faYoutube, faPatreon, faFacebookSquare, faTwitter, faInstagram, faReddit } from '@fortawesome/free-brands-svg-icons'
export default ({
    Vue, // the version of Vue being used in the VuePress app
    options, // the options for the root Vue instance
    router, // the router instance for the app
    siteData // site metadata
}) => {
    // ...add enhancements
    // mailchimp modal, google analytics, etc...
    Vue.use(SocialSharing)
    library.add(faFacebookSquare, faLinkedin, faYoutube, faTwitter, faInstagram, faReddit, faPatreon)
    Vue.component('fa-icon', FontAwesomeIcon)
    Vue.component("VueDisqus", () => import('vue-disqus/dist/vue-disqus.vue'));
}