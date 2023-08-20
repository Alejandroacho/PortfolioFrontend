<template>
  <div class="loader">
    <h3 v-if="message">
      {{ message }}
    </h3>
    <span class="loader__spinner"></span>
  </div>
</template>

<script lang="ts">
export default {
  name: "SpinningLoader",

  props: {
    message: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/colors.scss";

h3 {
  text-align: center;
}

.loader {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  justify-content: center;
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
