<template>
  <div class="card">
    <ImageDisplay
      :key="image.id"
      :image="image"
      class="image"
    />
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
  <ModalComponentVue
    :showModal="showProjectDetail"
    @close="closeProjectDetail"
  >
    <template v-slot:header>
      <h2>{{ project.title }}</h2>
    </template>
  </ModalComponentVue>
</template>

<script>
import ImageDisplay from "@/components/atoms/ImageDisplay/ImageDisplay.vue";
import CustomButton from "../../atoms/CustomButton/CustomButton.vue";
import ModalComponentVue from "../../atoms/ModalComponent/ModalComponent.vue";

export default {
  name: "ProjectCard",
  components: {
    ImageDisplay,
    CustomButton,
    ModalComponentVue,
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
  computed: {
    image() {
      return this.project.images.filter((image) => image.type === "CARD").pop();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/colors.scss";

.card{
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  border-width: 1px;
  border-color: $secondary-color;
  border-style: solid;
  margin: 10px;
  width: 300px;
  height: 400px;
  background-color: $primary-color;
  color: $secondary-color;
  font-family: "Roboto", sans-serif;
  font-size: 1.2rem;
  text-align: center;
}
.image {
  display: block;
  width: 300px;
  height: 200px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.card-content{
    height: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 10px;
    width: 95%;
    h2 {
      max-height: 37px;
      padding: 0;
      margin: 0;
      margin-top: 10px;
    }
    p {
      font-size: medium;
    }
}
</style>
