import generateSource from "../../../../.storybook/utils.js";
import ImageDisplay from "./ImageDisplay.vue";

export default {
  title: "atoms/ImageDisplay",
  component: ImageDisplay,
  parameters: {
    docs: {
      description: {
        component:
          "This is the component that displays images, handling the alt text" +
          " and the type of image. If the images does not load, it will not be shown.",
      },
    },
  },
  argTypes: {
    image: {
      description: "Image object.",
      table: {
        type: {
          summary: "Object",
          detail:
            'It must contain "image", "description" and "type" properties.',
        },
      },
    },
  },
};

const codeTemplate = '<ImageDisplay v-bind="args" />';

const Template = (args) => ({
  components: { ImageDisplay },
  setup() {
    return { args };
  },
  template: codeTemplate,
});

/**
 * Image display with a correct image object.
 */
export const StoryWithImage = Template.bind({});

StoryWithImage.args = {
  image: {
    image: "public/design-system-light.png",
    description: "JavaScript",
    type: "PC",
  },
};

StoryWithImage.parameters = {
  docs: {
    source: { code: generateSource(codeTemplate, StoryWithImage.args) },
  },
};

/**
 * Image display without an image object.
 */
export const StoryWithoutImage = Template.bind({});

StoryWithoutImage.args = {
  image: undefined,
};

StoryWithoutImage.parameters = {
  docs: {
    source: { code: generateSource(codeTemplate, StoryWithoutImage.args) },
  },
};
