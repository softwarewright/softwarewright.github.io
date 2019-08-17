<template>
  <div class="post">
    <router-link :to="post.path">
      <div>
        <img v-if="post.frontmatter.image" :src="$withBase(post.frontmatter.image)" alt />
      </div>
      <h2>{{ post.frontmatter.title }}</h2>
      <p>{{ post.frontmatter.description }}</p>
    </router-link>
  </div>
</template>
<script>
export default {
  props: ["post"]
};
</script>