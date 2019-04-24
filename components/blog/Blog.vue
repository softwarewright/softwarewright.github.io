<template>
  <page-section>
    <h2>Check out our latest posts!</h2>
    <blog-posts-preview :posts="posts"/>
  </page-section>
</template>
<script>
  import { mapGetters } from "vuex"
  import BlogPostsPreview from "~/components/blog/BlogPostsPreview"
  import PageSection from "~/components/shared/PageSection"

  export default {
    components: {
      BlogPostsPreview,
      PageSection
    },
    computed: {
      ...mapGetters("blog", ["posts"]),
    }
  }
</script>
<style scoped>
  h2 {
    text-align: center;
  }
</style>


