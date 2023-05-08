<template>
  <div>
    <h2>{{ project.title }}</h2>
    <ImageDisplay
      v-for="image in project.images"
      :key="image.id"
      :image="image"
    />
  </div>
</template>

<script>
import ImageDisplay from "@/components/atoms/ImageDisplay/ImageDisplay.vue";
import CustomButton from "../../atoms/CustomButton/CustomButton.vue";

export default {
  name: "ProjectSection",
  components: {
    ImageDisplay,
    CustomButton,
  },
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
</style>
