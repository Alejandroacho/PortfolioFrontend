<template>
  <img
    v-if="image?.image"
    class="image-display"
    draggable="false"
    v-show="imageWasLoaded"
    @load="loadImage"
    :src="image.image"
    :alt="image.description"
  />
</template>

<script>
export default {
  name: "ImageDisplay",
  props: {
    image: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      imageWasLoaded: false,
    };
  },
  methods: {
    loadImage() {
      this.imageWasLoaded = true;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/colors.scss";
.image-display {
  max-width: 40vw;
  max-height: 100%;
}
</style>
