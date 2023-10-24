<script lang="ts" setup>
const props = defineProps({
  data: {
    type: String,
    default: '',
  },
})
const text = toRef(props.data);
</script>

<template lang="pug">
.text-block(v-if="props.data" v-html="text")
</template>

<style lang="scss" scoped>
@import '../assets/styles/media.scss';

.text-block {
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  @include tablets {
    max-width: 100%;
  }
}
</style>
