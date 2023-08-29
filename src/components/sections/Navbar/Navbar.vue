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
        <li><a href="#end-of-hero">About</a></li>
        <li><a href="#end-of-about">Experience</a></li>
        <li><a href="#end-of-experience">Projects</a></li>
      </ul>
      <div id="burguer-menu">
        <input type="checkbox" v-model="openBurguer"/>
        <span></span>
        <span></span>
        <span></span>
        <ul id="menu">
          <a href="#end-of-hero" @click="openBurguer = false"><li>About</li></a>
          <a href="#end-of-about" @click="openBurguer = false"><li>Experience</li></a>
          <a href="#end-of-experience" @click="openBurguer = false"><li>Projects</li></a>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
export default {
  name: "NavbarSection",

  data() {
    return {
      openBurguer: false,
    };
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

#burguer-menu {
  display: none;
}

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
  margin: 15px 13.9vw;
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

a {
  margin-left: 5px;
  color: $primary-color;
  text-decoration: none;
}

@media screen and (max-width: 1000px) {
  .nav-content {
    margin: 15px 5%;
  }
}

@media screen and (max-width: 800px) {
  .logo-container {
    position: inherit;
  }

  .logo {
    width: 30px;
    height: 30px;
  }

  .title {
    display: none;
  }

  .nav-content {
    display: flex;
    margin: 16px 6vw;
    align-items: center;
    justify-content: space-between;
  }

  .nav-items {
    display: none;
  }

  #burguer-menu {
    display: block;
  }

  #burguer-menu a
  {
    text-decoration: none;
    color: #232323;
    transition: color 0.3s ease;
  }

  #burguer-menu input {
    display: block;
    width: 30px;
    height: 25px;
    position: absolute;
    opacity: 0;
    z-index: 2;
    -webkit-touch-callout: none;
  }

  #burguer-menu span {
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;
    background: $primary-color;
    border-radius: 3px;
    z-index: 1;
    transform-origin: 4px 0;
    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                opacity 0.55s ease;
  }

  #burguer-menu span:first-child {
    transform-origin: 0 0;
  }

  #burguer-menu span:nth-last-child(2) {
    transform-origin: 0 100%;
  }

  #burguer-menu input:checked ~ span {
    opacity: 1;
    transform: rotate(45deg) translate(-2px, -1px);
    background: #232323;
  }

  #burguer-menu input:checked ~ span:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }

  #burguer-menu input:checked ~ span:nth-last-child(2) {
    transform: rotate(-45deg) translate(0, -1px);
  }

  #menu {
    position: absolute;
    width: 300px;
    margin: -100px 0 0 -88vw;
    padding: 125px 50px 50px;
    background: $lighter-grey;
    list-style-type: none;
    -webkit-font-smoothing: antialiased;
    transform-origin: 0 0;
    transform: translate(-100%, 0);
    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
  }

  #menu li {
    padding: 10px 0;
    font-size: 22px;
  }

  #burguer-menu input:checked ~ ul {
    transform: none;
  }
}
</style>
