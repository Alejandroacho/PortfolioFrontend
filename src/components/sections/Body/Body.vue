<template>
  <main class="main">
    <h1 class="main-title">Full Stack Developer</h1>
    <br>
    <div class="about">
      <p>{{user.about}}</p>
      <image-display :image="user.image"/>
    </div>
  </main>
</template>

<script lang="ts">
import { User, Certification, Experience, Project } from "@/assets/types";
import { PropType } from "vue";
import ImageDisplay from "@/components/atoms/ImageDisplay/ImageDisplay.vue";

export default {
  name: "BodySection",
  components: {ImageDisplay},

  props: {
    user: {
      type: Object as PropType<User>,
      required: true,
    },
    experiences: {
      type: Array<Experience>,
      required: true,
    },
    projects: {
      type: Array<Project>,
      required: true,
    },
    certifications: {
      type: Array<Certification>,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
@import "src/assets/colors.scss";
.main {
  align-items: center;
  justify-content: center;
  margin: 10vh 13.9vw;
}

.main-title {
  font-size: 3rem;
  margin: 0;
  text-align: center;
}

.about {
  display: flex;
  font-size: 18px;
}

.about :deep(.image-display) {
  height: 150px;
  width: 150px;
  border-radius: 100%;
  margin-left: 20px;
  margin-right: 20px;
}

</style>
