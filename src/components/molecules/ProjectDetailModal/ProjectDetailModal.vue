<template>
  <ModalComponent show-modal="show-modal">
    <template v-slot:header>
      <ImageSlider :show-arrows="false" :images="images" />
    </template>
    <template v-slot:body>
      <div class="body">
        <h1>{{ project.title }}</h1>
        <p>{{ project.description }}</p>
        <div class="technologies">
          <p>Technologies:</p>
          <TechnologyBadge
            v-for="technology in project.technologies"
            class="technology"
            :key="technology.id"
            :language="technology.name"
          />
        </div>
        <div class="authors">
          <p>Authors:</p>
          <PopperTooltip
            v-for="author in project.authors"
            class="author"
            :key="author.id"
            arrow
            disableClickAway
          >
            <CustomButton
              type="text"
              :message="`${author.first_name} ${author.last_name}`"
            />
            <template #content>
              <div>
                <a
                  v-for="socialNetwork in author.social_networks"
                  :key="socialNetwork.platform"
                  :href="socialNetwork.url"
                  target="_blank"
                >
                  {{ socialNetwork.platform }} | {{ socialNetwork.nickname }}
                </a>
              </div>
            </template>
          </PopperTooltip>
        </div>
      </div>
    </template>
    <template v-slot:footer>
      <div class="footer">
        <CustomButton
          type="magic"
          message="See Project"
          @click="openURL(project.url)"
        />
        <CustomButton
          v-if="project.repository"
          class="repo-button"
          type="secondary"
          message="See Repo"
          @click="openURL(project.repository)"
        />
      </div>
    </template>
  </ModalComponent>
</template>

<script>
import ModalComponent from "@/components/atoms/ModalComponent/ModalComponent.vue";
import ImageSlider from "@/components/molecules/ImageSlider/ImageSlider.vue";
import CustomButton from "@/components/atoms/CustomButton/CustomButton.vue";
import TechnologyBadge from "@/components/atoms/TechnologyBadge/TechnologyBadge.vue";

export default {
  name: "ProjectDetailModalComponent",
  components: {
    ModalComponent,
    ImageSlider,
    CustomButton,
    TechnologyBadge,
  },

  data() {
    return {
      showProjectDetail: false,
    };
  },

  props: {
    showModal: {
      type: Boolean,
      required: true,
    },

    project: {
      type: Object,
      required: true,
    },
  },

  methods: {
    openURL(url) {
      window.open(url, "_blank");
    },
  },

  computed: {
    images() {
      return this.project.images.filter((image) => image.type !== "CARD");
    },
  },
};
</script>

<style lang="scss" scoped>
:deep(.carousel) {
  height: 50vh !important;
}
:deep(.text) {
  font-size: large;
}
.body {
  padding: 0 5px;
}
.technologies {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  margin-top: 1rem;
}
.technology {
  margin-left: 1rem;
}
.authors {
  @extend .technologies;
}
.author {
  @extend .technology;
}
.footer {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;
}
.repo-button {
  margin-left: 1rem;
}
</style>
