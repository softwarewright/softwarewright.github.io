<template>
  <div>
    <div class="hero-image">
      <div class="overlay"></div>
    </div>
    <div>
      <div class="container hero-section">
        <div class="row my-auto">
          <div class="col-xl-8 col-md-12 cta">
            <h1 class="hero-title">
              Continuous Integration
              <br>Continuous Delivery
              <br>and Beyond!
            </h1>
            <p
              class="hero-message"
            >At Software By Wright we have a high on creating Continuous Integration and Continuous Delivery workflows that deliver more value to your customers faster.</p>
            <nuxt-link
              to="/contact"
              class="hero-action ml-auto btn btn-outline-primary"
            >REQUEST CONSULTATION NOW</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PageSection from "~/components/shared/PageSection";
export default {
  components: {
    PageSection
  }
};
</script>

<style scoped lang="scss">
@import "~/assets/main.scss";
.hero-title {
  font-size: 2.6rem;
  font-weight: bold;
}

.hero-message {
  margin: 3rem 0;
}

.hero-action {
  float: right;
  padding: 1.3rem 1rem;
  border-radius: 0;
}

.hero-section {
  @include respond(tablet) {
    height: calc(100vh - 10rem);
    padding-top: 5rem;
    margin-bottom: -1.5rem;
  }
}

.hero-image {
  position: absolute;
  width: 100%;
  height: 100%;
  filter: blur(4px);
  -webkit-filter: blur(4px);
  /* background-image: url("~assets/background3.jpg"); */
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -3;
}

.overlay {
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  padding: 0 2rem;
  background: rgba(255, 255, 255, 0.5);
  z-index: -2;
}
</style>
