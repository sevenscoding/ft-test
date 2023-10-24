<script lang="ts" setup>
const props = defineProps({
  data: {
    type: Array,
    default: () => [],
  },
})
const isNavActive = props.data.length ? { prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next' } : false;
const generateRandomNum = (min, max) =>  Math.floor(Math.random() * (max - min) + min);
const id = String(generateRandomNum(1, 100));

const prev = ref(null);
const next = ref(null);

const nextSlide = () => {
  const container = document?.querySelector(`.swiper-${id}`);
  container.swiper.slideNext();
};

const prevSlide = () => {
  const container = document?.querySelector(`.swiper-${id}`);
  container.swiper.slidePrev();
};
</script>

<template lang="pug">
.slider-block(v-if="props.data.length")
  .swiper-button-prev(ref="prev" @click="prevSlide")
  .swiper-button-next(ref="next" @click="nextSlide")
  swiper(
    :class="`swiper-${id}`"
    :slides-per-view="1"
    :loop="true"
    :navigation="isNavActive"
  )
    SwiperSlide(
      v-for="(slide, idx) in props?.data"
      :key="idx"
      )
        img(:src="slide" alt="slide")
</template>

<style lang="scss">
@import '../assets/styles/media.scss';

.slider-block {
  width: 1120px;
  margin: 0 auto;
  position: relative;
  @media screen and (max-width: 1399.98px) {
    width: 100%;
    img {
      width: 100%;
    }
  }
  .swiper-button-prev {
    left: -80px;
    @media screen and (max-width: 1399.98px) {
      left: 0;
    }
  }
  .swiper-button-next {
    right: -80px;
    @media screen and (max-width: 1399.98px) {
      right: 0;
    }
  }
  .swiper-button-prev, .swiper-button-next {
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--base-black-color);
    position: absolute;
    transition: .25s;
    top: calc(50% - 30px);
    @media screen and (max-width: 1399.98px) {
      top: 50%;
    }
    &:hover {
      background-color: var(--base-blue-color);
    }
  }

  .swiper-button-prev:after, .swiper-button-next:after {
    font-size: 22px;
    color: var(--base-white-color);
  }
}
</style>
