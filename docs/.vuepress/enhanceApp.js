import 'bootstrap/dist/css/bootstrap.min.css';
// import VueDisqus from 'vue-disqus'

export default ({
    Vue, // the version of Vue being used in the VuePress app
    options, // the options for the root Vue instance
    router, // the router instance for the app
    siteData // site metadata
}) => {
    // ...add enhancements
    // mailchimp modal, google analytics, etc...
    // Vue.use(VueDisqus);

    Vue.component("VueDisqus", () => import('vue-disqus/dist/vue-disqus.vue'));
}