<template>
  <div>
    <h2>{{ project.title }}</h2>
    <ImageDisplay
      v-for="image in projectImagesToDisplay"
      :key="image.id"
      :image="image"
    />
    <CustomButton
      type="secondary"
      message="See project"
      @click="openProjectDetail"
    />

    <ModalComponentVue
      :showModal="showProjectDetail"
      @close="closeProjectDetail"
    >
      <template v-slot:header>
        <h2>{{ project.title }}</h2>
      </template>
    </ModalComponentVue>
  </div>
</template>

<script>
import ImageDisplay from "@/components/atoms/ImageDisplay/ImageDisplay.vue";
import CustomButton from "../../atoms/CustomButton/CustomButton.vue";
import ModalComponentVue from '../../atoms/ModalComponent/ModalComponent.vue';

export default {
  name: "ProjectSection",
  components: {
    ImageDisplay,
    CustomButton,
    ModalComponentVue
  },
  data() {
    return {
      showProjectDetail: false,
    };
  },
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  methods: {
    openProjectDetail() {
      this.showProjectDetail = true;
    },
    closeProjectDetail() {
      this.showProjectDetail = false;
    },
  },
  computed: {
    projectImagesToDisplay() {
      return this.project.images.filter(image => image.type !== 'OTHER');
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
