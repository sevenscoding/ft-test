<script lang="ts" setup>
</script>

<template lang="pug">
ul.social__list
  li.social__item
    a(href="" target='_blank').social__link
      img(src="~/assets/img/social/fb.svg" alt="Facebook link")
  li.social__item
    a(href="" target='_blank').social__link
      img(src="~/assets/img/social/vk.svg" alt="Vk link")
  li.social__item
    a(href="" target='_blank').social__link
      img(src="~/assets/img/social/instagram.svg" alt="Instagram link")
  li.social__item
    a(href="" target='_blank').social__link
      img(src="~/assets/img/social/telegram.svg" alt="Telegram link")
</template>

<style lang="scss" scoped>
.social {
  &__list {
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
    display: flex;
    align-items: center;
    list-style-type: none;
  }
  &__item {
    &:not(:last-child) {
      margin-right: 20px;
    }
    &:before {
      display: none;
    }
  }
  &__link {
    cursor: pointer;
  }
}
</style>

