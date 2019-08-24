<template>
  <div class="card text-center my-4">
    <img
      v-if="subject.image"
      class="card-img-top"
      :src="$withBase(subject.image)"
      alt
    />
    <router-link :to="subject.path">
      <div class="card-body">
        <div class="text-container">
          <h5 class="card-title">{{ subject.title }}</h5>
        </div>
        <div class="text-container">
          <p class="card-text">{{ subject.description }}</p>
        </div>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  props: ["subject"]
};
</script>
<style scoped>
.card {
 width: 65%;
 margin: auto;
}
</style>