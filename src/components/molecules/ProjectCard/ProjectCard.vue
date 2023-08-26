<template>
  <div class="card">
    <ImageDisplay :key="image.id" :image="image" v-if="image" class="image" />
    <div class="card-content">
      <h2>{{ project.title }}</h2>
      <p>{{ project.introduction }}</p>
    </div>
    <div class="card-button">
      <CustomButton
        class="button"
        type="text"
        message="See project"
        @click="openProjectDetail"
      />
    </div>
  </div>
  <ModalComponent
    @close="closeProjectDetail"
    :project="project"
    :show-modal="showProjectDetail"
  />
</template>

<script lang="ts">
import ImageDisplay from "@/components/atoms/ImageDisplay/ImageDisplay.vue";
import CustomButton from "../../atoms/CustomButton/CustomButton.vue";
import ModalComponent from "@/components/atoms/ModalComponent/ModalComponent.vue";
import { Image, Project } from "@/assets/types";
import { ImageTypes } from "@/assets/constants";
import { PropType } from "vue";

export default {
  name: "ProjectCard",

  components: {
    ModalComponent,
    ImageDisplay,
    CustomButton,
  },

  data() {
    return {
      showProjectDetail: false,
    };
  },

  props: {
    project: {
      type: Object as PropType<Project>,
      required: true,
    },
  },

  methods: {
    openProjectDetail(): void {
      this.showProjectDetail = true;
    },

    closeProjectDetail(): void {
      this.showProjectDetail = false;
    },
  },

  computed: {
    image(): Image {
      return this.project.images
        .filter((image: Image) => image.type === ImageTypes.CARD)
        .pop();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/colors.scss";

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  border-width: 1px;
  border-color: $secondary-color;
  border-style: solid;
  margin: 10px;
  width: 340px;
  height: 400px;
  background-color: $primary-color;
  color: $secondary-color;
  font-family: "Roboto", sans-serif;
  font-size: 1.2rem;
  text-align: center;
}

.image {
  display: block;
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  height: 215px;
  object-fit: cover;
}

.card-content {
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10px;
  width: 95%;
  h2 {
    max-height: 37px;
    padding: 0;
    margin: 10px 0 0;
  }
  p {
    font-size: medium;
  }
}
</style>
