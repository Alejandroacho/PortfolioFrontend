<template>
  <div v-if="language" class="technology-badge non-selectable">
    <img
      class="technology-badge__icon"
      draggable="false"
      v-show="imageWasLoaded"
      @load="loadImage"
      :src="technologyLanguage"
      :alt="language"
    />
    <h3 class="technology-badge__title">
      {{ language }}
    </h3>
  </div>
</template>

<script lang="ts">
export default {
  name: "TechnologyBadge",

  props: {
    language: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      imageWasLoaded: false,
    };
  },

  computed: {
    technologyLanguage(): string {
      const path = "/src/assets/icons/technologies";
      const icon = this.language.toLowerCase();
      return `${path}/${icon}.svg`;
    },
  },

  methods: {
    loadImage(): void {
      this.imageWasLoaded = true;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/colors.scss";

.technology-badge {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: 100%;
  max-width: 100%;
  max-height: 10px;
  padding: 10px;
  background-color: $primary-color;
  border: 1px solid $lighter-grey;
  border-radius: 30px;
  cursor: default;

  &__icon {
    width: 20px;
    height: 20px;
    margin-right: 0.5rem;
  }

  &__title {
    font-size: 0.8rem;
    font-weight: 400;
    color: $black;
  }
}
</style>
