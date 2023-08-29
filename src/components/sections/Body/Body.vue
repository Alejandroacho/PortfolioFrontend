<template>
  <main class="main">
    <h1 class="main-title">Full Stack Developer</h1>
    <div class="about">
      <p>{{ user.about }}</p>
      <image-display :image="user.image"/>
    </div>
    <span id="end-of-about"/>
    <h2 class="title">Experience</h2>
    <experience-card
      v-for="experience in experiences"
      :key="experience.id"
      :experience="experience"
    />
    <span id="end-of-experience"/>
    <h2 class="title">Projects</h2>
    <div class="projects end-of-site">
      <project-card
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </div>
  </main>
</template>

<script lang="ts">
import { User, Certification, Experience, Project } from "@/assets/types";
import { PropType } from "vue";
import ImageDisplay from "@/components/atoms/ImageDisplay/ImageDisplay.vue";
import ExperienceCard from "@/components/molecules/ExperienceCard/ExperienceCard.vue";
import ProjectCard from "@/components/molecules/ProjectCard/ProjectCard.vue";

export default {
  name: "BodySection",
  components: { ImageDisplay, ExperienceCard, ProjectCard },

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
  align-items: center;
  margin-top: 20px;
}

.about :deep(.image-display) {
  height: 150px;
  width: 150px;
  border-radius: 100%;
  margin-left: 20px;
}

.title {
  font-size: 2rem;
  margin-top: 60px;
  margin-bottom: 40px;
  text-align: center;
}

.projects {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}

.end-of-site {
  margin-bottom: 150px;
}

@media screen and (max-width: 1000px) {
  .main {
    margin: 18px 5%;
  }
}

@media screen and (max-width: 800px) {
  .main {
    margin: 18px 6vw;
  }

  .main-title {
    padding-bottom: 20px;
  }

  .about {
    flex-direction: column-reverse;
    align-items: center;
    margin-top: 25px;
    p{
      margin-top: 25px;
    }
  }

  .about :deep(.image-display) {
    height: 150px;
    width: 150px;
    border-radius: 100%;
    margin-left: 0;
    margin-bottom: 10px;
  }

  .end-of-site {
    margin-bottom: 70px;
  }
}
</style>
