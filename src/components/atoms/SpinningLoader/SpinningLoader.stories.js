import SpinningLoader from "./SpinningLoader.vue";
import generateSource from "../../../../.storybook/utils.js";

export default {
  title: "atoms/SpinningLoader",
  component: SpinningLoader,
  parameters: {
    docs: {
      description: {
        component: 'Content loader, to show while the content is loading.'
      },
    },
  },
  argTypes: {
    message: {
      description: "Message displayed while loading.",
    },
  },
};

const codeTemplate = '<SpinningLoader v-bind="args"/>'

const Template = (args) => ({
  components: { SpinningLoader },
  setup() {
    return { args };
  },
  template: codeTemplate,
});

/**
* This is the default loader if you use it as it is.
*/
export const DefaultSpinningLoaderStory = Template.bind({});

DefaultSpinningLoaderStory.args = {};

DefaultSpinningLoaderStory.parameters = {
  docs: {
    source: { code: generateSource(codeTemplate, DefaultSpinningLoaderStory.args) },
  },
};

/**
* Loader with custom message would look like this.
*/
export const SpinningLoaderWithCustomTextStory = Template.bind({});

SpinningLoaderWithCustomTextStory.args = {
  message: "Custom message",
};

SpinningLoaderWithCustomTextStory.parameters = {
  docs: {
    source: { code: generateSource(codeTemplate, SpinningLoaderWithCustomTextStory.args) },
  },
};
