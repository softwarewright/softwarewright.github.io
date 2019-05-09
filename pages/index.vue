<template>
  <home/>
</template>

<script>
import Home from "~/components/home/Home";
export default {
  head: {
    title: "Software By Wright: Continuous Delivery Services",
    meta: [
      { name: 'description', content: 'Ready to take your continuous integration and continuous delivery to the next level?' }
    ]
  },
  components: {
    Home
  },
  async fetch({ store }) {
    await store.dispatch("blog/retrievePosts");
  }
};
</script>

<style>
</style>
