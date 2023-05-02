<template>

</template>

<script>
export default {
  name: "ImageDisplay",
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  methods: {
    loadImage() {
      this.imageWasLoaded = true;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
