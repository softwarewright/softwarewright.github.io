<template>
  <div class="core-value">
    <fa-icon
      class="core-value-icon"
      :style="{ color: color }"
      :icon="['fas', icon]"
    />
    <h3>
      {{title}}
    </h3>
    <p>
      {{description}}
    </p>
  </div>
</template>
<script>
export default {
  props: {
    icon: String,
    title: String,
    description: String,
    color: String
  }
}
</script>
<style scoped lang="scss">
  @import "~/assets/_variables.scss";
  @import "~/assets/_mixins.scss";

  .core-value {
    margin: 2rem 0;
  }

  .core-value-icon {
    font-size: 6rem;
    margin: 1.5rem 0;
  }


.primary {
  color: $primary;
}

.secondary {
  color: $secondary;
}

.tertiary {
  color: $tertiary;
}

</style>
