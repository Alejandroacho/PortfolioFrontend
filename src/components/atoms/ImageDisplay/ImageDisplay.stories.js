import generateSource from "../../../../.storybook/utils.js";
import ImageDisplay from "./ImageDisplay.vue";

export default {
  title: "atoms/ImageDisplay",
  component: ImageDisplay,
  argTypes: {
    image: {
      description: 'Image object.',
      table: {
        type: {
          summary: 'Object',
          detail: 'It must contain "image", "description" and "type" properties.'
        },
      },
    },
  },
};

const template = '<ImageDisplay v-bind="args" />'

const Template = (args) => ({
  components: { ImageDisplay },
  setup() {
    return { args };
  },
  template: template,
});

export const StoryWithImage = Template.bind({});

StoryWithImage.args = {
  image: {
    image: "public/design-system-light.png",
    description: "JavaScript",
    type: "PC"
  }
};

StoryWithImage.parameters = {
  docs: {
    description: {
      component: 'This is the component that displays any kind of images.',
    },
    source: { code: generateSource(template, StoryWithImage.args) },
  },
};
