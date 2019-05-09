<template>
  <blog-post :post="post"/>
</template>
<script>
  import post from "~/content/api-testing-sandbox.md"
  import BlogPost from "~/components/blog/BlogPost.vue";
  export default {
    head: { ...post.attributes.head },
    data() {
      return { post };
    },
    components: { BlogPost }
  };
</script>