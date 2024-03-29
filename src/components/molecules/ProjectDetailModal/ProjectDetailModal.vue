<template>
  <ModalComponent :show-modal="showModal">
    <template v-slot:header>
      <ImageSlider :show-arrows="false" :images="images" class="image" />
    </template>
    <template v-slot:body>
      <div class="body">
        <h1>{{ project.title }}</h1>
        <p>{{ project.description }}</p>
        <div class="technologies">
          <p>Technologies:</p>
          <div class="technologies-badges">
            <TechnologyBadge
              v-for="technology in project.technologies"
              class="technology"
              :key="technology.id"
              :language="technology.name"
            />
          </div>
        </div>
        <div class="authors">
          <p class="authors-label">Authors:</p>
          <div class="author">
            <PopperTooltip
              v-for="author in project.authors"
              :key="author.id"
              arrow
              class="author-popper"
            >
              <CustomButton
                type="text"
                :message="`${author.first_name} ${author.last_name}`"
              />
              <template #content>
                <div
                  v-for="socialNetwork in author.social_networks"
                  :key="socialNetwork.platform"
                >
                  <a :href="socialNetwork.url" target="_blank">
                    {{ socialNetwork.platform }}: {{ socialNetwork.nickname }}
                  </a>
                </div>
              </template>
            </PopperTooltip>
          </div>
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

<script lang="ts">
import ModalComponent from "@/components/atoms/ModalComponent/ModalComponent.vue";
import ImageSlider from "@/components/molecules/ImageSlider/ImageSlider.vue";
import CustomButton from "@/components/atoms/CustomButton/CustomButton.vue";
import TechnologyBadge from "@/components/atoms/TechnologyBadge/TechnologyBadge.vue";
import { PropType } from "vue";
import { Image, Project } from "@/assets/types";

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
      currentPopperOpened: null as number | null,
    };
  },

  props: {
    showModal: {
      type: Boolean,
      required: true,
    },

    project: {
      type: Object as PropType<Project>,
      required: true,
    },
  },

  methods: {
    openURL(url: string): void {
      window.open(url, "_blank");
    },
  },

  computed: {
    images(): Image[] {
      return this.project.images.filter(
        (image: Image) => image.type !== "CARD"
      );
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/colors.scss";

:deep(.image-display) {
  object-fit: cover;
}

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

.technologies-badges {
  display: flex;
  flex-wrap: wrap;
}

.authors-poppers {
  display: flex;
  flex-wrap: wrap;
}

.technology {
  margin-left: 1rem;
  margin-top: 5px;
}

.authors {
  @extend .technologies;
}

.author {
  margin-left: 1rem;
}

.footer {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;
}

.repo-button {
  margin-left: 1rem;
}

a {
  color: $secondary-color;
  text-decoration: none;
  &:hover {
    color: $grey-blue;
    text-decoration: underline;
  }
}

@media screen and (max-width: 800px) {
  :deep(.carousel) {
    height: 20vh !important;
  }

  .footer {
    justify-content: space-around;
  }

  .authors-label {
    margin: 0;
  }

  .author-popper {
    margin-top: 5px !important;
  }
}
</style>
