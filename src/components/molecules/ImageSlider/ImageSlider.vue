<template>
  <div class="carousel">
    <button v-if="showArrows" class="carousel-control left" @click="prev">&lt;</button>
    <div class="carousel-inner">
      <transition
        :name="transitionEffect"
        v-for="(image, index) in images"
        v-bind:key="index"
      >
        <div class="carousel-item" v-show="currentSlide === index">
          <ImageDisplay :image="image" />
        </div>
      </transition>
    </div>
    <button v-if="showArrows" class="carousel-control right" @click="next">&gt;</button>
    <div v-id="showIndicators" class="carousel-indicators">
      <button
        class="carousel-indicator-item"
        :class="{ active: currentSlide === index }"
        v-for="(item, index) in images.length"
        :key="index"
        @click="switchSlide(index)"
      />
    </div>
  </div>
</template>

<script>
import ImageDisplay from "@/components/atoms/ImageDisplay/ImageDisplay.vue";

export default {
  name: "ImageSlider",
  components: { ImageDisplay },

  mounted() {
    this.startSlideTimer();
  },

  data: () => ({
    currentSlide: 0,
    slideInterval: null,
    direction: "right",
    interval: 5000,
  }),

  props: {
    images: {
      type: Array,
      required: true,
    },
    showArrows: {
      type: Boolean,
      default: true,
    },
    showIndicators: {
      type: Boolean,
      default: true,
    },
  },

  computed: {
    transitionEffect() {
      return this.direction === "right" ? "slide-out" : "slide-in";
    },
  },

  methods: {
    setCurrentSlide(index) {
      this.currentSlide = index;
    },

    prev() {
      const index =
        this.currentSlide > 0 ? this.currentSlide - 1 : this.images.length - 1;
      this.setCurrentSlide(index);
      this.direction = "left";
      this.startSlideTimer();
    },

    _next(step = 1) {
      const index =
        this.currentSlide < this.images.length - 1
          ? this.currentSlide + step
          : 0;
      this.setCurrentSlide(index);
      this.direction = "right";
    },

    next() {
      this._next();
      this.startSlideTimer();
    },

    startSlideTimer() {
      this.stopSlideTimer();
      this.slideInterval = setInterval(() => {
        this._next();
      }, this.interval);
    },

    stopSlideTimer() {
      clearInterval(this.slideInterval);
    },

    switchSlide(index) {
      this.stopSlideTimer();
      this.currentSlide = index;
      this.startSlideTimer();
    },
  },

  beforeUnmount() {
    this.stopSlideTimer();
  },
};
</script>

<style scoped>
.carousel {
  display: flex;
  justify-content: center;
}
.carousel-inner {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.carousel-item {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
.slide-in-enter-active,
.slide-in-leave-active,
.slide-out-enter-active,
.slide-out-leave-active {
  transition: all 1s ease-in-out;
}
.slide-in-enter-from {
  transform: translateX(-100%);
}
.slide-in-leave-to {
  transform: translateX(100%);
}
.slide-out-enter-from {
  transform: translateX(100%);
}
.slide-out-leave-to {
  transform: translateX(-100%);
}

.carousel-control {
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  display: inline-block;
  position: absolute;
  height: 40px;
  aspect-ratio: 1;
  border-radius: 100%;
  top: calc(50% - 25px);
  color: #f3f3f3;
  cursor: pointer;
}
.left {
  z-index: 999;
  left: 0;
  cursor: pointer;
}
.right {
  z-index: 999;
  right: 0;
  cursor: pointer;
}
.carousel-indicators {
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  bottom: 1.5em;
  z-index: 2;
}
.carousel-indicator-item {
  width: 15px;
  height: 15px;
  border: white solid 1px;
  background: black;
  opacity: 0.5;
  margin: 0.2em;
  border-radius: 50%;
  cursor: pointer;
}
.active {
  opacity: 1;
}
</style>
