<template>
  <div class="container-fluid">
    <div class="blog-posts-preview row">
      <div
        v-for="post in posts"
        :key="post.title"
        class="col-xl-4 col-md-12">
        <blog-post-preview
          :imageUrl="post.imageUrl"
          :title="post.title"
          :description="post.description"/>
      </div>
    </div>
  </div>
</template>
<script>
import BlogPostPreview from "~/components/blog/BlogPostPreview"
export default {
  props: {
    posts: Array
  },
  components: {
    BlogPostPreview
  }
}
</script>

<style scoped>
  .blog-posts-preview {
    text-align: center;
    margin-top: 2rem;
  }
</style>
