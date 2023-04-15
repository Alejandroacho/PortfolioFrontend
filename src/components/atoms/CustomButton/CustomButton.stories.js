import { action } from "@storybook/addon-actions";
import CustomButton from "./CustomButton.vue";

export default {
  title: "atoms/CustomButton",
  component: CustomButton,
  argTypes: {
    message: {
      description: "Button message.",
      table: {
        type: {
          summary: "String",
          detail: "It must be a valid string.",
        },
      },
    },
    type: {
      control: "select",
      options: ["primary", "secondary", "text", "magic"],
      description: "Button type.",
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
  message: "Hello World",
  type: "primary",
};
