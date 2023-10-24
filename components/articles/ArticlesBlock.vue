<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';
import { APP_PAGES } from "~/constants";

const ArticleItem = defineAsyncComponent(() =>
  import('~/components/articles/ArticleItem.vue')
)

const props = defineProps({
  data: {
    type: Object,
    default: () => {},
  },
  pageType: {
    type: String,
    default: '',
  },
});

const isArticlePage = props.pageType === APP_PAGES.ARTICLE;
</script>

<template lang="pug">
.articles-wrap
  h2.articles__title(v-if="isArticlePage") Похожие статьи
  .articles-block(v-if="props.data?.articles?.length")
    ArticleItem(v-for="article in props.data.articles" :item="article")
</template>

<style lang="scss" scoped>
@import '../assets/styles/media.scss';
.articles-block {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-column-gap: 40px;
  grid-row-gap: 40px;
  @include tablets {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 30px;
  }
  @include mobiles {
    grid-template-columns: auto;
  }
}
</style>
