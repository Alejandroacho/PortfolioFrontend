<template>
  <div class="hero" id="droplet-container">
    <img
      src="../../../../public/logo.png"
      alt="Logo image"
      draggable="false"
      class="logo"
    />
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
}
.logo{
  width: 50vh;
  height: 50vh;
  border-radius: 100%;
}
</style>
