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
      control: { type: "select", options: ["primary", "secondary", "text"] },
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
  template: '<CustomButton v-bind="args"/>',
});

export const CustomButtonStory = Template.bind({});

CustomButtonStory.args = {
  message: "Hello World",
  type: "primary",
};
