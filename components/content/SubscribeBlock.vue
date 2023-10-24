<script lang="ts" setup>
</script>

<template lang="pug">
.subscribe
  h3.subscribe__title Подпишись на рассылку
  .subscribe__block
    input(type="email" placeholder="Email").subscribe__input
    button.subscribe__button.subscribe-button Подписаться
</template>

<style lang="scss" scoped>
@import '../assets/styles/media.scss';
.subscribe {
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--base-black-color);
  border-radius: 2px;
  padding-left: 30px;
  padding-right: 30px;
  @include tablets {
    min-height: auto;
    flex-direction: column;
    padding-top: 15px;
    padding-bottom: 15px;
  }
  &__title {
    margin: 0;
    @include tablets {
      font-size: 28px;
      margin-bottom: 30px;
    }
    @include mobiles {
      font-size: 22px;
      margin-bottom: 20px;
    }
  }
  &__block {
    display: flex;
    @include tablets {
      flex-direction: column;
      align-items: center;
    }
  }
  &__button {
    @include tablets {
      margin-top: 20px;
    }
  }
  &__input {
    background-color: transparent;
    outline: none;
    border: none;
    border-bottom: 1px solid var(--base-grey-color);
    transition: .25s;
    padding: 2px 8px;
    cursor: pointer;
    font-size: var(--base-font-size);
    color: var(--base-white-color);

    width: 354px;
    margin-right: 37px;
    @include tablets {
      margin-right: 0;
    }
    @include mobiles {
      width: 100%;
    }
    ::placeholder {
      color: var(--base-grey-color);
    }
    &:focus {
      border-bottom-color: var(--base-blue-color);
    }
  }
}
</style>


