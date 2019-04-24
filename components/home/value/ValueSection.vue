<template>
  <page-section>
    <div class="container-fluid">
      <h2>We Craft Infrastructure</h2>
      <p>We deliver solutions that take your ability to manage and deploy software to the next level.</p>
      <div class="core-values row mx-auto">
        <div v-for="coreValue in coreValues" :key="coreValue.title" class="mx-auto col-lg-4 col-md-12">
          <core-value
            :icon="coreValue.icon"
            :title="coreValue.title"
            :description="coreValue.description"
            :color="coreValue.color" />
        </div>
      </div>
    </div>
  </page-section>
</template>
<script>

import PageSection from "~/components/shared/PageSection";
import CoreValue from "~/components/home/value/CoreValue";
export default {
  components: {
    PageSection,
    CoreValue
  },
  data() {
    return {
      coreValues: [
        {
          title: "Best Practices",
          description: "Built using the best practices, making your infrastruture more managable for your needs.",
          icon: "clipboard-list",
          color: "#E4C844"
        },
        {
          title: "Informative",
          description: "When the unexpected happens, your infrastructure should be the first to inform you and not your customers.",
          icon: "exclamation-circle",
          color: "#E44460"
        },
        {
          title: "Automated",
          description: "Automate your decisions and delivery to create more value faster.",
          icon: "robot",
          color: "#44B0E4"
        }
      ]
    }
  }
}
</script>
<style scoped>
  h2, p {
    text-align: center;
  }

  .core-values {
    text-align: center;
    width: 100%;
    padding-top: 2rem;
  }


</style>

