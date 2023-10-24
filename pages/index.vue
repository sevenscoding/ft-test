<script lang="ts" setup>
import { BASE_API_URL } from "~/constants";
import { defineAsyncComponent } from 'vue';

const ContentCreator = defineAsyncComponent(() =>
  import('~/components/common/ContentCreator.vue')
)

const layoutName = "default";

const title = ref('');
const content = ref('');
const bodyData = ref([]);

const { data } = await useFetch(`${BASE_API_URL}`);
if (data) {
  const { body, meta } = data?.value;
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
  .home
    ContentCreator(:content="bodyData")
</template>

<style scoped></style>
