<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';

const AppHeader = defineAsyncComponent(() =>
  import('~/components/common/AppHeader.vue')
)
const AppFooter = defineAsyncComponent(() =>
  import('~/components/common/AppFooter.vue')
)
</script>

<template lang="pug">
div
  AppHeader
  main
    .container
      slot
  AppFooter
</template>

<style lang="scss" scoped>
</style>
