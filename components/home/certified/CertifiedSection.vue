<template>
  <page-section class="certified-section">
    <div class="container">
      <div class="row certified">
        <div class="col-lg-6 col-md-12 mx-auto certified-in">
          <fa-icon class="certified-icon" :icon="['fab', 'aws']"/>
          <h3>AWS Certified</h3>
        </div>
        <div class="col-lg-6 col-md-12 mx-auto certified-because">
          <h2 class="certified-because-title">Certified In What We Do</h2>
          <p>Certified in the technologies that we use to deliver you the best product possible that can grow with your needs.</p>
        </div>
      </div>
    </div>
  </page-section>
</template>
<script>
import PageSection from "~/components/shared/PageSection";
export default {
  components: {
    PageSection
  },
  data() {
    return {
      certifications: {
        name: "AWS Associate Solutions Architect",
        link: ""
      }
    };
  }
};
</script>
<style lang="scss" scoped>
@import "~/assets/_variables.scss";

.certified-section {
  background-color: $primary;
  color: white;
  padding-top: 4rem;
  margin-top: 2rem;
}
.certified {
  text-align: center;
  padding-bottom: 2rem;
}

.certified-icon {
  font-size: 5rem;
  margin-bottom: 2rem;
}

.certified-in,
.certified-because {
}

.certified-because {
  padding: 1.5rem 0;
}

h2 {
  padding: 0;
}

.certified-because-title {
  margin-bottom: 2rem;
}
</style>

