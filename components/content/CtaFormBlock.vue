<script lang="ts" setup>
const props = defineProps({
  data: {
    type: String,
    default: '',
  },
})
</script>

<template lang="pug">
.form-block
  .form-block__left
    img(src="~/assets/img/cta_form.jpg" alt="Form picture").form-block__img
  .form-block__right
    h2.form-block__title Стань участником проекта
    .form-block__form
      .form-block__el
        input(type="text" placeholder="Имя").form-block__input
        input(type="text" placeholder="Телефон").form-block__input
        input(type="email" placeholder="Email").form-block__input
        button.form-block__button.subscribe-button Присоединиться
</template>

<style lang="scss" scoped>
@import '../assets/styles/media.scss';

.form-block {
  display: flex;
  background-color: var(--base-black-color);
  padding: 60px;
  @include tablets {
    flex-direction: column;
    padding: 40px;
  }
  @include mobiles {
    padding: 20px;
  }

  &__img {
    @include tablets {
      width: 100%;
    }
  }

  &__button {
    margin-top: 50px;
    @include  tablets {
      margin-top: 30px;
      margin-right: auto;
      margin-left: auto;
    }
  }

  &__right {
    width: 353px;
    @include  tablets {
      width: 100%;
      margin-top: 30px;
    }
  }

  &__input {
    width: 100%;
    display: block;
    margin-bottom: 25px;
  }

  &__left {
    width: 595px;
    height: 326px;
    margin-right: 60px;
    @include  tablets {
      width: 100%;
      height: auto;
      margin-right: 0;
    }
  }

  &__title {
    color: var(--base-white-color);
    margin-top: 0;
    @include  tablets {
      text-align: center;
    }
  }
}
</style>
