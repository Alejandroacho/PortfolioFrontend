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
</template>

<script>
export default {
  name: "HeroSection",
};
</script>

<style scoped lang="scss">
@import "src/assets/colors.scss";

.hero{
  background-color: $background-gray;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.logo{
  width: 50vh;
  height: 50vh;
  border-radius: 100%;
}

.drop {
  position: relative;
	width: 20px;
	height: 20px;
  top: -30px;
  margin: 0 auto;
	background: #FFF;
	-moz-border-radius: 20px;
	-webkit-border-radius: 20px;
	border-radius: 20px;
  -moz-animation-name: drip;
  -webkit-animation-name: drip;
  animation-name: drip;
  -moz-animation-timing-function: cubic-bezier(1,0,.91,.19);
  -webkit-animation-timing-function: cubic-bezier(1,0,.91,.19);
  animation-timing-function: cubic-bezier(1,0,.91,.19);
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
	border-bottom: 30px solid rgba(255,255,255,1);
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
</style>
