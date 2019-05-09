<template>
  <transition name="fade">
    <about/>
  </transition>
</template>
<script>
import About from "~/components/about/About";
export default {
  head: {
    title: "About Us",
    meta: [
      {
        name: "description",
        content:
          "At Software By Wright we strive to make your Infrastructure work for you."
      }
    ]
  },
  components: {
    About
  }
};
</script>

