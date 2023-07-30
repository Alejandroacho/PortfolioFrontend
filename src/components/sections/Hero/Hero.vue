<template>
  <div class="hero" id="droplet-container">
    <div class="logo-with-animation">
      <img
        src="../../../../public/logo.png"
        alt="Logo image"
        draggable="false"
        class="logo"
      />
      <div class="liquid"></div>
      <svg
        width="100"
        height="300"
        viewBox="0 0 100 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Drop animation"
        class="drop-container"
      >
        <circle
          cx="50"
          :cy="dropValue ? Number(dropValue) : 0"
          r="4"
          fill="white"
        />
      </svg>
    </div>
  </div>
  <svg
    width="100%"
    height="100px"
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
    class="waves"
  >
    <polygon :points="wavePoints" fill="white" transform="translate(0, 50)" />
  </svg>
</template>

<script>
import { WaveTank } from "./WaveTank.js";

export default {
  name: "HeroSection",

  data() {
    return {
      waveTank: new WaveTank(),
      millisecondsForAnimation: 2000,
      width: 100,
      animationRequestId: null,
      grid: null,
      wavePoints: null,
      dropValue: -50,
    };
  },

  methods: {
    updateAnimation(timestamp) {
      this.updateDrip(timestamp);
      this.waveTank.update(this.waveTank.waves);
      this.wavePoints = this.waveTank.getWavePoints(this.width, this.grid);
      const sawTime = this.getTimeSaw(timestamp, 500);
      const timeToDropOnWaveTank = 0.01;
      if (sawTime < timeToDropOnWaveTank) this.dropOnWaveTank();
      this.animationRequestId = requestAnimationFrame(this.updateAnimation);
    },

    updateDrip(timestamp) {
      const sawTime = this.getTimeSaw(timestamp);
      const timeToResetTheDrop = 0.6;
      if (sawTime < timeToResetTheDrop) this.dropValue = -50;
      else this.dropValue = Math.pow(sawTime - 0.6, 2) * 10000;
    },

    getTimeSaw(timestamp, offset = 0) {
      const cyclePosition =
        (timestamp + offset) / this.millisecondsForAnimation;
      return cyclePosition - Math.floor(cyclePosition);
    },

    resize() {
      const SVG_WIDTH = 100;
      this.width = document.body.clientWidth;
      this.grid = SVG_WIDTH / this.waveTank.waveLength;
    },

    dropOnWaveTank() {
      const dropPosition = 50;
      this.waveTank.waves[dropPosition].point = -dropPosition;
    },
  },

  mounted() {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;
    this.animationRequestId = requestAnimationFrame(this.updateAnimation);
    if (this.animationRequestId !== undefined)
      cancelAnimationFrame(this.animationRequestId);
    this.resize();
    this.updateAnimation();
    window.addEventListener("resize", this.resize);
  },

  beforeUnmount() {
    window.removeEventListener("resize", this.resize);
    if (this.requestId !== undefined) cancelAnimationFrame(this.requestId);
  },
};
</script>

<style scoped lang="scss">
@import "src/assets/colors.scss";

.hero {
  background-color: $background-gray;
  height: 95vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.logo-with-animation {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.logo {
  z-index: 999;
  margin-top: calc(50vh - 30vh);
  width: 30vh;
  height: 30vh;
  border-radius: 100%;
}
.liquid {
  position: relative;
  width: 80px;
  height: 24px;
  top: -25px;
  background: white;
  border-radius: 0 0 100% 100%;
  animation: drip 1150ms cubic-bezier(0, 0, 1, 0.5),
    drip 2000ms 1150ms infinite cubic-bezier(0, 0, 1, 0.5);
}
@keyframes drip {
  to {
    top: -15px;
    width: 10px;
    border-radius: 0 0 100% 100%;
    display: none;
  }
}
.drop-container {
  margin-top: -50px;
}
.waves {
  margin-top: -55px;
}
</style>
