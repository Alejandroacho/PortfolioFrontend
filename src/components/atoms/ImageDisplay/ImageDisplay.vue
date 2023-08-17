<template>
  <img
    v-if="image?.url"
    class="image-display"
    draggable="false"
    v-show="imageWasLoaded"
    @load="loadImage"
    :src="image.url"
    :alt="image.description"
  />
</template>

<script lang="ts">
import {PropType} from "vue";
import {Image} from "@/assets/types";

export default {
  name: "ImageDisplay",

  props: {
    image: {
      type: Object as PropType<Image>,
      required: true,
    },
  },

  data() {
    return {
      imageWasLoaded: false,
    };
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
.image-display {
  max-width: 100%;
  max-height: 100%;
  width: 100%;
  object-fit: cover;
}
</style>
