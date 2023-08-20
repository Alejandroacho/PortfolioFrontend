<template>
  <header class="hero" id="droplet-container">
    <div class="logo-with-animation">
      <img src="/logo.png" alt="Logo image" draggable="false" class="logo" />
      <div class="liquid" ref="condensation" />
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
    <svg
      width="100%"
      height="100px"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      class="waves"
    >
      <polygon :points="wavePoints" fill="white" transform="translate(0, 50)" />
    </svg>
  </header>
</template>

<script lang="ts">
import { WaveTank } from "./WaveTank";

export default {
  name: "HeroSection",

  data() {
    return {
      startTime: 0,
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
    updateAnimation(timestamp: number = 0) {
      if (timestamp !== 0 && this.startTime == 0) this.startTime = timestamp;
      let animationTime: number = timestamp - this.startTime;
      if (!this.$refs.condensation.classList.contains("condensation"))
        this.initiateCondensation();
      this.updateDrip(animationTime);
      this.waveTank.update(this.waveTank.waves);
      this.wavePoints = this.waveTank.getWavePoints(this.width, this.grid);
      const sawTime: number = this.getTimeSaw(animationTime, 500);
      const timeToDropOnWaveTank: number = 0.01;
      if (sawTime < timeToDropOnWaveTank) this.dropOnWaveTank();
      this.animationRequestId = requestAnimationFrame(this.updateAnimation);
    },

    updateDrip(timestamp: number) {
      const sawTime: number = this.getTimeSaw(timestamp);
      const timeToResetTheDrop: number = 0.6;
      if (sawTime < timeToResetTheDrop) this.dropValue = -50;
      else this.dropValue = Math.pow(sawTime - 0.6, 2) * 10000;
    },

    getTimeSaw(timestamp: number, offset: number = 0): number {
      const cyclePosition: number =
        (timestamp + offset) / this.millisecondsForAnimation;
      return cyclePosition - Math.floor(cyclePosition);
    },

    resize(): void {
      const SVG_WIDTH: number = 100;
      this.width = document.body.clientWidth;
      this.grid = SVG_WIDTH / this.waveTank.waveLength;
    },

    dropOnWaveTank(): void {
      const dropPosition: number = 50;
      this.waveTank.waves[dropPosition].point = -dropPosition;
    },

    initiateCondensation(): void {
      this.$refs.condensation.classList.add("condensation");
    },

    removeAnimationIfExists(): void {
      this.animationRequestId = requestAnimationFrame(this.updateAnimation);
      if (this.animationRequestId !== undefined) {
        cancelAnimationFrame(this.animationRequestId);
        this.$refs.condensation.classList.remove("condensation");
      }
    },
  },

  mounted(): void {
    this.removeAnimationIfExists();
    this.resize();
    this.updateAnimation();
    window.addEventListener("resize", this.resize);
  },

  beforeUnmount(): void {
    window.removeEventListener("resize", this.resize);
    this.removeAnimationIfExists();
  },
};
</script>

<style scoped lang="scss">
@import "src/assets/colors.scss";

.hero {
  background-color: $background-gray;
  height: 100vh;
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
  margin-top: calc(50vh - 20vh);
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
}

.condensation {
  animation: drip 1300ms cubic-bezier(0, 0, 1, 0.5),
    drip 2000ms 1300ms infinite cubic-bezier(0, 0, 1, 0.5);
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
  margin-top: -50px;
}
</style>
