<script lang="ts" setup>
const props = defineProps({
  data: {
    type: Object,
    default: () => {},
  },
})
</script>

<template lang="pug">
figure.image-block
  img(v-if="props.data?.src" :src='props.data?.src' :alt='props.data?.caption')
  figcaption.image-block__text.small-text {{ props.data?.caption }}
</template>

<style lang="scss" scoped>
.image-block {
  img {
    width: 100%;
  }
}
</style>
