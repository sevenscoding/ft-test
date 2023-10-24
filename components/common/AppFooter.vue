<script lang="ts" setup>
import AppLogo from './AppLogo.vue';
import AppSocialLinks from './AppSocialLinks.vue';
import SubscribeBlock from '../content/SubscribeBlock.vue';
</script>

<template lang="pug">
footer.footer
  .container
    .footer__block
      .footer__left
        AppLogo
        .footer__info.small-text Cтатьи о дизайне и искусстве, которые исследуют творческие вдохновения и актуальные тенденции, раскрывая мир эстетики и креативности
      .footer__right
        a(href="mailto:gmail@gmail.com").footer__email
          .footer__email__label.small-text email
          .footer__email__field.default-text testblogsupport@gmail.com
        .footer__social
          AppSocialLinks
    SubscribeBlock

</template>

<style lang="scss" scoped>
@import '../assets/styles/media.scss';
.footer {
  margin-top: 200px;
  padding-top: 50px;
  @include tablets {
    padding-top: 30px;
    margin-top: 100px;
  }
  &__block {
    padding-bottom: 70px;
    @include tablets {
      padding-bottom: 35px;
    }
  }
  &__info {
    margin-top: 20px;
    max-width: 413px;
    @include tablets {
      margin-top: 10px;
      max-width: 100%;
      margin-bottom: 10px;
    }
  }
  &__block {
    display: flex;
    justify-content: space-between;
    @include tablets {
      flex-direction: column;
    }
  }
  &__email {
    margin-bottom: 24px;
    text-decoration: none;
    display: block;
    color: var(--base-black-color);
    @include tablets {
      margin-bottom: 12px;
    }
  }
}
</style>
