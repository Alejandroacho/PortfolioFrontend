<template>
  <button :class="cssStyle" @click="handleClick">
    <span class="custom-button__message">
      {{ message }}
    </span>
  </button>
</template>

<script lang="ts">
export default {
  name: "CustomButton",
  emits: ["handleClick"],

  props: {
    message: {
      type: String,
      required: true,
    },

    type: {
      type: String,
      default: "primary",
      options: ["primary", "secondary", "text", "magic"],
    },
  },

  computed: {
    cssStyle(): string {
      const basicClass: string = "custom-button";
      return `${basicClass} ${this.type}`;
    },
  },

  methods: {
    handleClick(): void {
      this.$emit("handleClick");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/colors.scss";

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
    margin: 0;
  }
}

.primary {
  background-color: $dark-gray;
  border: 1px solid $dark-black;
  color: $white;
  &:hover {
    background-color: $secondary-color;
  }
}

.secondary {
  background-color: $white;
  border: 1px solid $secondary-color;
  color: $secondary-color;
}

.text {
  background-color: $white;
  border: none;
  color: $secondary-color;
  padding: 0;
  height: 0;

  &:hover {
    text-decoration: underline;
  }
}

.magic {
  background-color: $white;
  border: 1px solid $secondary-color;
  color: $secondary-color;
  position: relative;
  &:hover {
    background-color: $white;
  }
}

.magic::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    45deg,
    red,
    blue,
    deeppink,
    blue,
    red,
    deeppink,
    blue
  );
  background-size: 800%;
  border-radius: 10px;
  filter: blur(8px);
  animation: glowing 20s linear infinite;
}

@keyframes glowing {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
}
</style>
