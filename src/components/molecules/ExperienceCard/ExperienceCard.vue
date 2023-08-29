<template>
  <div class="card">
    <ImageDisplay :key="image.id" :image="image" class="image" />
    <div class="card-content">
      <div class="card-header">
        <h3>{{ experience.position }}</h3>
        <div class="experience-period">
          <custom-button
            :message="experience.company"
            @handle-click="goToPage"
            type="text"
          />
          <p class="time">{{ time }}</p>
        </div>
      </div>
      <div
        :class="{
          collapsable: !showFullText,
          expanded: showFullText,
        }"
        id="text"
      >
        <p
          :class="{
            description: true,
            'description-clamped': !showFullText,
          }"
        >
          {{ experience.description }}
        </p>
        <br />
        <div class="technologies">
          <technology-badge
            v-for="technology in experience.technologies"
            :key="technology.id"
            :language="technology.name"
          />
        </div>
        <br />
      </div>
      <custom-button
        type="text"
        :message="showFullText ? 'See Less' : 'See More'"
        @handle-click="
          () => {
            showFullText = !showFullText;
          }
        "
        class="see-more-button"
      />
    </div>
  </div>
</template>

<script lang="ts">
import ImageDisplay from "@/components/atoms/ImageDisplay/ImageDisplay.vue";
import CustomButton from "../../atoms/CustomButton/CustomButton.vue";
import TechnologyBadge from "@/components/atoms/TechnologyBadge/TechnologyBadge.vue";
import { Experience, Image } from "@/assets/types";
import { PropType } from "vue";

export default {
  name: "ExperienceCard",

  components: {
    ImageDisplay,
    CustomButton,
    TechnologyBadge,
  },

  data() {
    return {
      showProjectDetail: false,
      showFullText: false,
      isClamped: false,
    };
  },

  props: {
    experience: {
      type: Object as PropType<Experience>,
      required: true,
    },
  },

  mounted() {
    this.setClampBehaviour();
  },

  methods: {
    goToPage(): void {
      window.open(this.experience.url, "_blank");
    },

    setClampBehaviour() {
      const text = this.$refs.text as HTMLElement;
      this.isClamped = text && text.scrollHeight > text.offsetHeight;
    },

    updateClampBehaviour(): void {
      this.$nextTick(() => {
        this.setClampBehaviour();
      });
    },
  },

  computed: {
    image(): Image {
      return this.experience.logo;
    },

    time(): string {
      return `${this.experience.start_date} - ${
        this.experience.current ? "Currently" : this.experience.end_date
      }
        (${this.experience.time_of_experience})`;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/colors.scss";

:deep(.custom-button) {
  margin: 0;
  padding: 0;
  font-size: 1.2rem;
  color: $secondary-color;
}

:deep(.custom-button__message) {
  margin: 0;
  padding: 0;
}

:deep(.technology-badge) {
  margin-top: 5px;
  margin-right: 5px;
}

.card {
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 10px;
  border-width: 1px;
  border-color: $secondary-color;
  border-style: solid;
  margin-top: 30px;
  width: 100%;
  min-height: 140px;
  background-color: $primary-color;
  color: $secondary-color;
  font-family: "Roboto", sans-serif;
  font-size: 1.2rem;
}

.image {
  display: block;
  width: 300px;
  height: 200px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.card-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}

.experience-period {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  width: 100%;
}

.time {
  margin-left: 10px;
  font-size: 0.8rem;
}

.description {
  font-size: medium;
  margin-top: 15px;
  margin-right: 5px;
  white-space: pre-wrap;
}

.description-clamped {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.technologies {
  display: flex;
  flex-wrap: wrap;
}

.collapsable {
  height: 112px;
  overflow: hidden;
}

.expanded {
  height: auto;
}

.see-more-button {
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 15px;
  color: $grey-blue;
}

h3 {
  max-height: 37px;
  padding: 0;
  margin: 10px 0 12px 0;
}

p {
  font-size: medium;
  margin: 0;
  overflow: hidden;
}


@media screen and (max-width: 800px) {
  .card {
    flex-direction: column;
    width: 93.5%;
    height: auto;
    padding: 10px;
  }

  .image {
    width: 100%;
    height: 200px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .card-content {
    width: 100%;
    height: auto;
  }

  .experience-period {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
  }

  .time {
    margin-left: 0;
    margin-top: 10px;
  }

  .description {
    margin-top: 10px;
    margin-right: 0;
  }

  .see-more-button {
    margin-top: 10px;
    margin-bottom: 20px;
    font-size: 15px;
    color: $grey-blue;
  }

  h3 {
    max-height: 37px;
    padding: 0;
    margin: 10px 0 12px 0;
  }

  p {
    font-size: medium;
    margin: 0;
    overflow: hidden;
  }
}
</style>
