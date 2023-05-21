import { action } from "@storybook/addon-actions";
import generateSource from "../../../../.storybook/utils.js";
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

    },
    type: {
      control: "select",
      options: ["primary", "secondary", "text", "magic"],
      description: "Button type.",

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


const codeTemplate = '<CustomButton v-bind="args" @handleClick="clicked"/>'

const Template = (args) => ({
  components: { CustomButton },
  setup() {
    return { args };
  },
  methods: { clicked: action("clicked") },
  template: codeTemplate,
});

/**
* Button used for actions that are supposed to be the main action.
*/
export const PrimaryButton = Template.bind({});

PrimaryButton.args = {
  message: "Hello World",
  type: "primary",
};

PrimaryButton.parameters = {
  docs: {
    source: { code: generateSource(codeTemplate, PrimaryButton.args) },
  },
};

/**
* Secondary button, used for actions that are not supposed to be the main action.
*/
export const SecondaryButton = Template.bind({});

SecondaryButton.args = {
  message: "Hello World",
  type: "secondary",
};

SecondaryButton.parameters = {
  docs: {
    source: { code: generateSource(codeTemplate, SecondaryButton.args) },
  },
};

/**
* Text button, useful for links or actions that are not supposed to be buttons.
*/
export const TextButton = Template.bind({});

TextButton.args = {
  message: "Hello World",
  type: "text",
};

TextButton.parameters = {
  docs: {
    source: { code: generateSource(codeTemplate, TextButton.args) },
  },
};

/**
* This type of button is used for unique actions that are supposed to be magic.
*/
export const MagicButton = Template.bind({});

MagicButton.args = {
  message: "Hello World",
  type: "magic",
};

MagicButton.parameters = {
  docs: {
    source: { code: generateSource(codeTemplate, MagicButton.args) },
  },
};
