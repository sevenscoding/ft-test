<script lang="ts" setup>
import { ARTICLE_API_URL } from "~/constants";
import { defineAsyncComponent } from 'vue';
const ContentCreator = defineAsyncComponent(() =>
  import('~/components/common/ContentCreator.vue')
);

const layoutName = "default";
const title = ref('');
const content = ref('');
const bodyData = ref([]);
const pageType = ref('');

const route = useRoute();
const id = route.params?.slug;
const { data } = await useFetch(`${ARTICLE_API_URL}${id}`);

if (data.value) {
  const { body, meta, page_type } = data?.value;
  pageType.value = page_type;
  bodyData.value = body;
  title.value = meta?.title;
  content.value = meta?.description;
}

useHead({
  title,
  meta: [
    { name: 'description', content }
  ],
});
</script>

<template lang="pug">
NuxtLayout(:name="layoutName")
  .article(v-if="data")
    ContentCreator(:content="bodyData" :type="pageType")
</template>

<style lang="scss" scoped>
.logo {
  cursor: pointer;
}
</style>
