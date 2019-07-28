# softwarewright.github.io

> Software Wright Website

## Vuepress

https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json

### Tips

#### Line Highlighting

``` js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

#### Tool Tips

::: tip
This is a tip
:::

::: warning
This is a tip
:::

::: danger
This is a tip
:::

::: danger STOP
This is a tip
:::

#### Import Code Snippts

<<< @filepath
<<< @filepath{highlightLines}

#### Google Analytics
https://vuepress.vuejs.org/config/#ga


## Color Scheme

triadic colors

light red: E44460
blue: 44B0E4
yellow: E4C844

light background: F8F8F7
dark background: 424453

## Font

<link href="https://fonts.googleapis.com/css?family=Montserrat:400,400i,700|Roboto+Slab:700" rel="stylesheet">

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).
