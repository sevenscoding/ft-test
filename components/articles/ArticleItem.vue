<script lang="ts" setup>
const props = defineProps({
  item: {
    type: Object,
    default: () => {},
  },
})
</script>

<template lang="pug">
.article(v-if="props.item")
  img(v-if='props.item.image' :src="props.item.image" :alt="props.item.title" loading="lazy").article__img
  h3.article__title(v-if='props.item.title') {{ props.item.title }}
  button.article__button(v-if="props.item.link")
    NuxtLink( :to="props.item.link") Читать
</template>

<style lang="scss" scoped>
@import '../assets/styles/media.scss';
.article {
  &__img {
    width: 427px;
    height: 320px;
    object-fit: fill;
    @include mobiles {
      width: 100%;
      height: auto;
    }
  }
  &__button {
    a {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  &__title {
    margin-top: 20px;
    margin-bottom: 30px;
    font-size: 22px;
    font-weight: 800;
    line-height: 30px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    color: var(--base-black-color);
    @include tablets {
      margin-top: 10px;
      margin-bottom: 20px;
      line-height: 24px;
      font-size: 18px;
    }
  }
}
</style>

