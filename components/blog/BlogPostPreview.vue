<template>
  <div class="card mx-auto">
    <!-- <img  class="card-img-top" alt="..."> -->
    <div class="blog-post-preview-img"></div>
    <div class="card-body">
      <h5 class="card-title">{{title}}</h5>
      <p class="card-text">{{description}}</p>
    </div>
</div>
</template>
<script>
export default {
  props: {
    imageUrl: String,
    title: String,
    description: String
  }
}
</script>

<style scoped lang="scss">
  @import "~/assets/_mixins.scss";
  .card {
    border-radius: 2px;
    margin: 2rem 0;

    @include respond(tablet) {
      width: 90%;
    }
    cursor: pointer;
  }
  .card-text {
    width: calc(100% - 20px);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .blog-post-preview {
    display: flex;
    flex-direction: column;
  }
  .blog-post-preview-img {
    width: 280px;
    height: 280px;
    background-color: antiquewhite;
    align-self: center;
    margin-top: 2rem;
  }
  .card-title {
    height: 3rem;
  }
  .blog-post-preview-description {
    margin-top: 2rem;
  }
</style>
