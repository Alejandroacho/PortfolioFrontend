<template>
  <div class="loader">
    <h3>
      {{ message }}
    </h3>
    <span class="loader__spinner"></span>
  </div>
</template>

<script>
export default {
  name: "SpinningLoader",
  props: {
    message: {
      type: String,
      default: "Content is loading...",
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/colors.scss";
h3 {
  text-align: center;
}
.loader {
  display: flex;
  flex-direction: column;
  align-items: center;
  &__spinner {
    width: 48px;
    height: 48px;
    border: 5px solid #fff;
    border-bottom-color: $secondary-color;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }
}
@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
