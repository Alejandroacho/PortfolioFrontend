import { action } from "@storybook/addon-actions";
import CustomButton from "./CustomButton.vue";

export default {
  title: "atoms/CustomButton",
  component: CustomButton,
  argTypes: {
    project: {
      description: "Button message.",
      table: {
        type: {
          summary: "String",
          detail: "It must be a valid string.",
        },
      },
    },
  },
};

const Template = (args) => ({
  components: { CustomButton },
  setup() {
    return { args };
  },
  methods: { clicked: action("clicked") },
  template: '<CustomButton v-bind="args" @handleClick="clicked"/>',
});

export const CustomButtonStory = Template.bind({});

CustomButtonStory.args = {
  project = {
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
  },
};
