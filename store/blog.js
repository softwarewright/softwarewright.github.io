import takeRight from "lodash/takeRight";

export const state = () => ({
  posts: []
});

export const actions = {
  async retrievePosts({ commit }) {
    await this.$axios("/blogManifest.json").then(({ data }) => {
      commit("savePosts", data);
    });
  }
};

export const mutations = {
  savePosts(state, payload) {
    state.posts = payload;
  }
};

export const getters = {
  posts: ({ posts }) => posts,
  topPosts: ({ posts }) => takeRight(posts, 3)
};
