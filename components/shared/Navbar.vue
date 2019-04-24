<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <nuxt-link to="/">
          <h3 class="navbar-brand">
            <fa-icon
              class="core-value-icon"
              :icon="['fas', 'cogs']"
            />
            SBW
          </h3>
        </nuxt-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="navbar-collapse collapse"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav ml-auto">
            <nuxt-link
              tag="li"
              to="/"
            >
              <a class="nav-link">Home</a>
            </nuxt-link>
            <nuxt-link
              tag="li"
              to="/about"
            >
              <a class="nav-link">About Us</a>
            </nuxt-link>
            <nuxt-link
              tag="li"
              to="/blog"
            >
              <a class="nav-link">Blog</a>
            </nuxt-link>
            <nuxt-link
              tag="li"
              to="/contact"
            >
              <a class="nav-link">Contact Us</a>
            </nuxt-link>
          </ul>
        </div>
      </div>
    </nav>

  </div>
</template>
<style lang="scss" scoped>
  @import "~/assets/_variables.scss";

  .navbar-brand {
    margin: auto 0;
    height: 100%;
    color: $primary;
  }

  .nuxt-link-exact-active a {
    display: inline-block;
    color: $primary !important;
    border-bottom: 2px solid $primary;
  }

  .nav-link {
    margin: 0 1rem;
    font-weight: bold;
  }
</style>
