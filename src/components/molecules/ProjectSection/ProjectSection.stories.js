import { action } from "@storybook/addon-actions";
import ProjectSection from "./ProjectSection.vue";

export default {
  title: "molecules/ProjectSection",
  component: ProjectSection,
  argTypes: {
    project: {
      description: "This is a project that should come from the backend",
    },
  },
};

const Template = (args) => ({
  components: { ProjectSection },
  setup() {
    return { args };
  },
  methods: { clicked: action("clicked") },
  template: '<ProjectSection v-bind="args" @handleClick="clicked"/>',
});

export const ProjectSectionStory = Template.bind({});

ProjectSectionStory.args = {
  project: {
    id: 1,
    title: "Project 1",
    description: "Project 1 description",
    url: "https://www.google.com",
    is_public: true,
    repository: "https://www.github.com",
    authors: [
      {
        id: 1,
        first_name: "Author",
        last_name: "Author",
        social_networks: [
          {
            platform: "github",
            url: "https://www.github.com",
            nickname: "author",
          },
        ],
      },
    ],
    images: [
      {
        id: 1,
        description: "Image 1",
        type: "PC",
        image: "public/design-system-light.png",
      },
    ],
  },
};
