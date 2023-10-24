<script lang="ts" setup>
const props = defineProps({
  data: {
    type: Object,
    default: () => {},
  },
})
</script>

<template lang="pug">
.article-intro
  .article-intro__left
    img(v-if="props.data?.image" :src='props.data?.image' :alt='props.data?.title')
  .article-intro__right
    h1.article-intro__title(v-if="props.data?.title") {{ props.data?.title }}
    .article-intro__info(v-if="props.data?.reading_time")
      img(src="~/assets/img/time.svg" alt="Time")
      .small-text {{ props.data?.reading_time }} мин время чтения
    .article-intro__info(v-if="props.data?.views_count")
      img(src="~/assets/img/view.svg" alt="Time")
      .small-text {{ props.data?.views_count }} прочитали статью
    .article-intro__text.default-text(v-if="props.data?.short_description") {{ props.data?.short_description }}
</template>

<style lang="scss" scoped>
@import '../assets/styles/media.scss';

.article-intro {
  display: flex;
  @include tablets {
    flex-direction: column;
  }
  &__left {
    width: 541px;
    margin-right: 30px;
    @include tablets {
      width: 100%;
    }
    img {
      object-fit: fill;
    }
  }
  &__right {
    max-width: 768px;
    @include desktop {
      max-width: 500px;
    }
    @include tablets {
      max-width: 100%;
    }
  }
  &__text {
    margin-top: 50px;
    line-height: 26px;
    @include tablets {
      margin-top: 25px;
    }
  }
  &__info {
    display: flex;
    font-weight: 400;
    align-items: center;
    margin-bottom: 4px;
    img {
      margin-right: 8px;
    }
  }
  &__title {
    margin-bottom: 30px;
    @include tablets {
      font-size: 42px;
      line-height: 48px;
      margin-top: 20px;
    }
    @include mobiles {
      font-size: 32px;
      line-height: 38px;
      margin-top: 10px;
    }
  }
}
</style>
