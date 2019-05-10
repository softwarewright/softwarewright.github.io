<template>
  <section>
    <slot/>
  </section>
</template>
<style scoped lang="scss">
@import "~/assets/main.scss";
section {
  padding-top: 2.5rem;
  @include respond(tablet) {
    padding-top: 5rem;
  }
}
</style>
