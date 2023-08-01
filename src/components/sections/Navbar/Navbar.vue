<template>
  <div class="nav-menu">
    <div
      class="nav-content"
    >
      <h1 class="title">Alejandro Acho</h1>
      <transition name="bounce">
        <img
          src="../../../../public/logo.png"
          alt="Logo image"
          draggable="false"
          class="logo"
          v-if="scrollPosition > 600"
        />
      </transition>
      <ul class="nav-items">
          <li>About me</li>
          <li>Projects</li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavbarSection",

  data() {
    return {
      show: false,
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
.title{
  color: white;
  font-size: 1.5rem;
  margin: 0;
}
.logo{
  width: 30px;
  height: 30px;
  border-radius: 100%;
}
.nav-menu {
  z-index: 1000;
  background-color: rgba(80, 80, 80, 0.91);
  position: fixed;
  width: 100%;
  top: 0;
  backdrop-filter: blur(10px);
}
.nav-content {
  display: flex;
  justify-content: space-between;
  padding: 10px 30px;
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
    padding: 0 10px;
    color: white;
    cursor: pointer;
  }
}
i {
  display: none;
}

// Mobile version - hidden hamburger menu
@media screen and (max-width: 768px) {
  .nav-menu {
    padding-top: 10px;
    position: absolute;
    width: 100%;
  }
  .open-menu {
    opacity: 1;
    height: 150px;
  }
  .closed-menu {
    opacity: 0;
    height: 0;
    padding: 0;
  }
  .nav-content {
    flex-direction: column;
    z-index: 100;
    position: relative;
    transition: all 0.2s ease-out;
  }
  .nav-items {
    flex-direction: column;
  }
  i {
    display: block;
    text-align: right;
    padding: 0 10px 10px 0;
  }
}
//.fade-enter-active,
//.fade-leave-active {
//    transition: opacity 1s ease;
//}
//.fade-enter,
//.fade-leave-to {
//    opacity: 0
//}
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