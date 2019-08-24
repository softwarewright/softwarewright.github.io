<template>
  <div class="posts d-flex flex-wrap" v-if="posts.length">
    <div v-for="post in posts" class="col-sm-6">
      <Post :post="post" />
    </div>
  </div>
</template >

<script>
export default {
  props: ["page", "acend"],
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
          return this.acend
            ? new Date(a.frontmatter.date) - new Date(b.frontmatter.date)
            : new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
        });
      return posts;
    }
  }
};
</script>
