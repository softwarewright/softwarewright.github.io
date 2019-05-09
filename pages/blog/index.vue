<template>
  <blog/>
</template>
<script>
import Blog from "~/components/blog/Blog";

export default {
  head: {
    title: "Blog",
    meta: [
      {
        name: "description",
        content: "Check out some of our latest posts at Software By Wright!"
      }
    ]
  },
  components: {
    Blog
  },
  async fetch({ store }) {
    await store.dispatch("blog/retrievePosts");
  }
};
</script>
