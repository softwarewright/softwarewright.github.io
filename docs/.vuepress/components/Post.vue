<template>
  <div class="card text-center my-4">
    <img
      v-if="post.frontmatter.image"
      class="card-img-top"
      :src="$withBase(post.frontmatter.image)"
      alt
    />
    <router-link :to="post.path">
      <div class="card-body">
        <div class="text-container">
          <h5 class="card-title">{{ post.frontmatter.title }}</h5>
        </div>
        <div class="text-container">
          <p class="card-text">{{ post.frontmatter.description }}</p>
        </div>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  props: ["post"]
};
</script>
<style scoped>
.text-container {
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>