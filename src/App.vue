<template>
  <SpinningLoader v-if="loading" />
  <NavbarSection v-if="!loading" :scrollPosition="scrollPosition" />
  <HeroSection v-if="!loading" />
  <BodySection
    v-if="!loading"
    :user="user"
    :experiences="experiences"
    :projects="projects"
    :certifications="certifications"
  />
  <FooterSection v-if="!loading" />
</template>

<script lang="ts">
import NavbarSection from "@/components/sections/Navbar/Navbar.vue";
import HeroSection from "@/components/sections/Hero/Hero.vue";
import BodySection from "@/components/sections/Body/Body.vue";
import FooterSection from "@/components/sections/Footer/Footer.vue";
import SpinningLoader from "@/components/atoms/SpinningLoader/SpinningLoader.vue";
import { User, Experience, Project, Certification } from "@/assets/types";
import { CertificationsController } from "@/assets/controllers/CertificationsController";
import { UsersController } from "@/assets/controllers/UsersController";
import { ExperiencesController } from "@/assets/controllers/ExperiencesController";
import { ProjectsController } from "@/assets/controllers/ProjectsController";

export default {
  components: {
    NavbarSection,
    HeroSection,
    BodySection,
    FooterSection,
    SpinningLoader,
  },

  data() {
    return {
      loading: true,
      scrollPosition: 0,
      user: <User>{},
      experiences: Array<Experience>,
      projects: Array<Project>,
      certifications: Array<Certification>,
      usersController: new UsersController(),
      experiencesController: new ExperiencesController(),
      projectsController: new ProjectsController(),
      certificationsController: new CertificationsController(),
    };
  },

  async mounted() {
    await this.$nextTick();
    this.loading = true;
    Promise.all([
      await this.usersController.getUsers(),
      await this.experiencesController.getExperiences(),
      await this.projectsController.getProjects(),
      await this.certificationsController.getCertifications()
    ]).then(([users, experiences, projects, certifications]): void => {
      this.user = users[0] as User;
      this.experiences = experiences as Experience[];
      this.projects = projects as Project[];
      this.certifications = certifications as Certification[];
    }).catch((error: any): void => {
      console.error(error);
      throw error
    }).finally((): void => {
      this.loading = false;
    });
  },

  methods: {
     handleScroll() {
      this.scrollPosition = window.scrollY;
     }
  },

  created() {
    window.addEventListener("scroll", this.handleScroll);
  },

  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/colors.scss";

.container {
  height: 1000px;
}
</style>
