<template>
  <nav class="nav-menu">
    <div class="nav-content">
      <h1 class="title">Alejandro Acho</h1>
      <div class="logo-container">
        <transition name="bounce">
          <img
            src="/logo.png"
            alt="Logo image"
            draggable="false"
            class="logo"
            v-if="scrollPosition > 600"
          />
        </transition>
      </div>
      <ul class="nav-items">
        <li>About</li>
        <li>Experience</li>
        <li>Projects</li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
export default {
  name: "NavbarSection",

  data() {
    return {};
  },

  props: {
    scrollPosition: {
      type: Number,
      required: true,
    },
  },

  methods: {},
};
</script>

<style lang="scss" scoped>
@import "src/assets/colors.scss";

.nav-menu {
  z-index: 5;
  background-color: rgba(80, 80, 80, 0.91);
  position: fixed;
  width: 100%;
  top: 0;
  backdrop-filter: blur(10px);
}

.title {
  color: white;
  font-size: 1.5rem;
  margin: 0;
}

.logo-container {
  display: flex;
  align-items: baseline;
  justify-content: center;
  min-width: 25px;
  min-height: 25px;
  position: absolute;
  left: calc(50% - (25px / 2));
}

.logo {
  width: 25px;
  height: 25px;
  border-radius: 100%;
}

.nav-content {
  display: flex;
  justify-content: space-between;
  margin: 10px 13.9vw;
  align-items: center;
}

.nav-items {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  li {
    padding-left: 10px;
    color: white;
    cursor: pointer;
  }
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}

.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>
