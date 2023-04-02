<template>
  <button :class="cssStyle" @click="handleClick">
    <p class="custom-button__message">
      {{ message }}
    </p>
  </button>
</template>

<script>
export default {
  name: "CustomButton",
  props: {
    message: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "primary",
      options: ["primary", "secondary", "text"],
    },
  },
  computed: {
    cssStyle() {
      const basicClass = "custom-button";
      return `${basicClass}`;
    },
  },
  methods: {
    handleClick() {
      this.$emit("click");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/colors.scss";

.custom-button {
  cursor: pointer;
  padding: 10px;
  width: fit-content;
  height: 15vh;
  display: flex;
  align-items: center;
  border-radius: 10px;
  background-color: $white;
  border: 1px solid $secondary-color;
  color: $secondary-color;

  &:hover {
    box-shadow: 0 0 3px $secondary-color;
    background-color: $dark-gray;
    color: $white;
  }

  &__message {
    padding: 10px;
    margin: 0px;
  }
}
</style>
