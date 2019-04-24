<template>
  <blog-post :post="post"/>
</template>
<script>
import post from "~/content/hello.md"
import BlogPost from "~/components/blog/BlogPost.vue"
export default {
  head: { ...post.attributes },
  data() { return { post } },
  components: { BlogPost }
}
</script>
