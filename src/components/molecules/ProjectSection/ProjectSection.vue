<template>
  <div>
    <h2>{{ project.title }}</h2>
    <div class="images">
      <ImageDisplay
        v-for="image in projectImagesToDisplay"
        :key="image.id"
        :image="image"
        class="image"
      />
    </div>
    <div class="button-container">
      <CustomButton
        type="secondary"
        message="See project"
        @click="openProjectDetail"
      />
    </div>
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
.images{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-bottom: 2rem;
  height: 60vh;
}
.image{
  display: block;
  width: auto;
  height: auto;
  object-fit: contain;
}
.button-container{
  display: flex;
  justify-content: center;
}
</style>
