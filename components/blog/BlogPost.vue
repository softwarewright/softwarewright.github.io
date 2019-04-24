<template>
  <div class="container post">
    <h1>{{post.attributes.title}}</h1>
    <div v-html="post.html" v-highlightjs></div>
  </div>
</template>
<script>
export default {
  props: [ "post" ]
}
</script>

<style lang="scss">
.post{
  h1 {
    text-align: center;
    padding: 3rem 0;
  }

  h2, h3, h4, h5 {
    padding: 1rem 0;
  }

  pre {
    margin: 2rem 0;
  }
  code {
    padding: 1rem;
  }
}
</style>

