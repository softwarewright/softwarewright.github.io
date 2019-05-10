import pkg from "./package";
import path from "path";

export default {
  mode: "universal",
  transition: "page",
  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Montserrat:400,400i,700|Roboto+Slab:700"
      }
      // { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' }
      // <link href="https://fonts.googleapis.com/css?family=Montserrat:400,400i,700|Roboto+Slab:700" rel="stylesheet">
    ],
    script: [
      {
        src: "https://code.jquery.com/jquery-3.3.1.slim.min.js",
        type: "text/javascript"
      },
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js",
        type: "text/javascript"
      },
      {
        src:
          "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js",
        type: "text/javascript"
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },

  /*
   ** Global CSS
   */
  css: ["~/assets/main.scss"],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    "~/plugins/font-awesome.js",
    "~/plugins/highlight.js"
    // "~/plugins/bootstrap.js",
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/google-analytics"
    // ["@nuxtjs/google-tag-manager", { id: "GTM-N9SPD4M" }]
    // '@nuxtjs/pwa',
  ],
  googleAnalytics: {
    id: "UA-139419580-1"
  },
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  router: {
    scrollBehavior: () => ({ x: 0, y: 0 })
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.md$/,
        loader: "frontmatter-markdown-loader",
        include: path.resolve(__dirname, "content"),
        options: {
          vue: {
            root: "dynamicMarkdown"
          }
        }
      });
    }
  }
};
