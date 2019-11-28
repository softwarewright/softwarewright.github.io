<template>
  <ParentLayout>
    <template #sidebar-top>
      <Social/>
    </template>
  </ParentLayout>
</template>

<script>
import ParentLayout from '@parent-theme/layouts/Layout.vue'
import Social from '../../components/Social.vue';

export default {
  components: {
    ParentLayout
  }
}
</script>