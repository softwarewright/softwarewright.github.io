<template>
  <div class="posts" v-if="posts.length">
    <Post v-for="post in posts" :post="post" />
  </div>
</template >

<script>
export default {
  props: ["page"],
  computed: {
    posts() {
      let currentPage = this.page ? this.page : this.$page.path;
      let posts = this.$site.pages
        .filter(x => {
          return (
            x.path.match(new RegExp(`(${currentPage})(?=.*html)`)) &&
            x.frontmatter &&
            !x.frontmatter.draft
          );
        })
        .sort((a, b) => {
          return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
        });
      return posts;
    }
  }
};
</script>
