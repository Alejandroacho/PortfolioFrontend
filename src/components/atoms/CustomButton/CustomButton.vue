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
      return `${basicClass} ${this.type}`;
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
  height: 45px;
  display: flex;
  align-items: center;
  border-radius: 10px;

  &:hover {
    box-shadow: 0 0 3px $secondary-color;
    font-weight: bold;
  }

  &__message {
    padding: 10px;
    margin: 0px;
  }
}

.primary{
  background-color: $dark-gray;
  border: 1px solid $dark-black;
  color: $white;
  &:hover {
    background-color: $secondary-color;
  }
}

.secondary{
  background-color: $white;
  border: 1px solid $secondary-color;
  color: $secondary-color;
}

.text{
  background-color: $white;
  border: none;
  color: $secondary-color;
  padding: 0px;
  height: 0px;

  &:hover {
    text-decoration: underline;
  }
}

</style>
