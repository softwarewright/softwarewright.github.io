<template>
  <page-section>
    <h2 class="blog-content-title">Gain Insights from our Blog</h2>
    <blog-posts-preview :posts="topPosts"/>
  </page-section>
</template>
<script>
  import { mapGetters } from "vuex"

  import PageSection from "~/components/shared/PageSection"
  import BlogPostsPreview from "~/components/blog/BlogPostsPreview"

  export default {
    components: {
      PageSection,
      BlogPostsPreview
    },
    computed: {
      ...mapGetters("blog", ["topPosts"])
    }
  };
</script>
<style scoped>
  .blog-content-title {
    text-align: center;
    width: 100%;
  }
</style>
