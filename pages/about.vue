<template>
  <transition name="fade">
    <about/>
  </transition>
</template>
<script>
  import About from "~/components/about/About"
  export default {
    head: {
      title: "About Us"
    },
    components: {
      About
    }
  }
</script>

