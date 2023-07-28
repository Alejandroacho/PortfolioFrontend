<template>
  <div class="hero" id="droplet-container">
    <img
      src="../../../../public/logo.png"
      alt="Logo image"
      draggable="false"
      class="logo"
    />
    <div class="drop"></div>
  </div>
    <svg
      width="100%"
      height="100px"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      class="wave"
    >
      <polygon
        :points="wavePoints"
        fill="white"
        transform="translate(0, 50)"
      />
    </svg>
</template>

<script>
import { WaveTank } from "./WaveTank.js";
export default {
  name: "HeroSection",
  data() {
    return {
      waveTank: new WaveTank(),
      SVG_WIDTH: 100,
      width: 100,
      widthRef: null,
      springs: null,
      requestId: null,
      grid: null,
      springsPath: null,
      requestIdRef: null,
      wavePoints: null
    };
  },
  methods: {
    update(timestamp) {
      this.waveTank.update(this.waveTank.springs);
      this.springs = [...this.waveTank.springs];
      this.wavePoints = [
        [0, 100],
        [0, 0],
        ...this.springs.map((x, i) => [i * this.grid, x.p]),
        [this.width, 0],
        [this.width, 100],
      ];
      const offset = 500;
      const saw = (timestamp + offset) / 2000 - Math.floor((timestamp + offset) / 2000);
      if (saw < 0.01) {
        this.drop();
      }
      this.requestId = requestAnimationFrame(this.update);
    },
    resize() {
      this.width = document.body.clientWidth;
    },
    drop() {
      const dropPosition = 50;
      this.waveTank.springs[dropPosition].p = -50;
    },
  },
  mounted() {
    this.resize();
    this.springs = this.waveTank.springs;
    this.grid = this.SVG_WIDTH / this.waveTank.waveLength;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;
    if (this.requestIdRef !== undefined) {
      cancelAnimationFrame(this.requestIdRef);
    }
    this.requestIdRef = requestAnimationFrame(this.update);
    window.addEventListener("resize", this.resize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.resize);
    if (this.requestId !== undefined) {
      cancelAnimationFrame(this.requestId);
    }
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
.logo {
  width: 30vh;
  height: 30vh;
  border-radius: 100%;
}

.drop {
  position: relative;
  width: 20px;
  height: 20px;
  top: -30px;
  margin: 0 auto;
  background: #fff;
  -moz-border-radius: 20px;
  -webkit-border-radius: 20px;
  border-radius: 20px;
  -moz-animation-name: drip;
  -webkit-animation-name: drip;
  animation-name: drip;
  -moz-animation-timing-function: cubic-bezier(1, 0, 0.91, 0.19);
  -webkit-animation-timing-function: cubic-bezier(1, 0, 0.91, 0.19);
  animation-timing-function: cubic-bezier(1, 0, 0.91, 0.19);
  -moz-animation-duration: 2s;
  -webkit-animation-duration: 2s;
  animation-duration: 2s;
  -moz-animation-iteration-count: infinite;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}

.drop:before {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 30px solid rgba(255, 255, 255, 1);
  top: -22px;
}

@keyframes ripple {
  from {
    opacity: 1;
  }
  to {
    width: 600px;
    height: 300px;
    border-width: 1px;
    top: -100px;
    opacity: 0;
  }
}

@keyframes ripple-2 {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    width: 200px;
    height: 100px;
    border-width: 1px;
    top: 100px;
    left: 200px;
  }
}

@keyframes drip {
  to {
    top: 190px;
  }
}
.wave{
  margin-top: -55px;
}
</style>
