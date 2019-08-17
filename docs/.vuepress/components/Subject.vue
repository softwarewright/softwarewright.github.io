<template>
  <div class="post">
    <router-link :to="subject.path">
      <div>
        <img v-if="subject.image" :src="$withBase(subject.image)" alt />
      </div>
      <h2>{{ subject.title }}</h2>
      <p>{{ subject.description }}</p>
    </router-link>
  </div>
</template>
<script>
export default {
  props: ["subject"]
};
</script>