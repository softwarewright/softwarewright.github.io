<template>
  <div class="post">
    <router-link :to="subject.path">
      <h2 class="my-4">{{ subject.title }}</h2>
      <div>
        <img v-if="subject.image" :src="$withBase(subject.image)" alt />
      </div>
      <p class="my-4">{{ subject.description }}</p>
    </router-link>
  </div>
</template>
<script>
export default {
  props: ["subject"]
};
</script>
<style scoped>
h2 {
}
</style>