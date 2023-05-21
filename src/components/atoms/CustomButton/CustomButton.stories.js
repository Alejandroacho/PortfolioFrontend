import { action } from "@storybook/addon-actions";
import CustomButton from "./CustomButton.vue";

export default {
  title: "atoms/CustomButton",
  component: CustomButton,
  parameters: {
    docs: {
      description: {
        component: 'Button component with 4 types: primary, secondary, text and magic.'
        + 'It expect a message and a click event. By default, the type is primary.'
      },
    },
  },
  argTypes: {
    message: {
      description: "Button message.",
      table: {
        type: {
          summary: "String",
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
        },
      },
    },
    handleClick: {
      description: "Button click event.",
      table: {
        type: {
          summary: "Function",
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

/**
* Button used for actions that are supposed to be the main action.
*/
export const PrimaryButton = Template.bind({});

PrimaryButton.args = {
  message: "Hello World",
  type: "primary",
};

/**
* Secondary button, used for actions that are not supposed to be the main action.
*/
export const SecondaryButton = Template.bind({});

SecondaryButton.args = {
  message: "Hello World",
  type: "secondary",
};

/**
* Text button, useful for links or actions that are not supposed to be buttons.
*/
export const TextButton = Template.bind({});

TextButton.args = {
  message: "Hello World",
  type: "text",
};

/**
* This type of button is used for unique actions that are supposed to be magic.
*/
export const MagicButton = Template.bind({});

MagicButton.args = {
  message: "Hello World",
  type: "magic",
};
