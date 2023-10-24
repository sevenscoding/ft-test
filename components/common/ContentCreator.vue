<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';

const props = defineProps({
  content: {
    type: Array,
    default: () => [],
  },
  type: {
    type: String,
    default: '',
  },
})
const contentBlocks = {
  'article_list_block': defineAsyncComponent(() => import('~/components/articles/ArticlesBlock')),
  'article_intro_block': defineAsyncComponent(() => import('~/components/content/ArticleIntroBlock')),
  'text_block': defineAsyncComponent(() => import('~/components/content/TextBlock')),
  'image_block': defineAsyncComponent(() => import('~/components/content/ImageBlock')),
  'subscribe_form_block': defineAsyncComponent(() => import('~/components/content/SubscribeBlock')),
  'slider_block': defineAsyncComponent(() => import('~/components/content/SliderBlock')),
  'cta_form_block': defineAsyncComponent(() => import('~/components/content/CtaFormBlock')),
};
</script>

<template lang="pug">
.content
  .content__wrapper(v-if="props.content.length")
    .block-indent(v-for='(content, key) in props.content' :key='key' )
      component(:data='content.data' :pageType="type" :is="contentBlocks[content?.type]")
</template>

<style lang="scss" scoped></style>
