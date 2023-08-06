import ImageSlider from "./ImageSlider.vue";
import generateSource from "../../../../.storybook/utils.js";
export default {
  title: "molecules/ImageSlider",
  component: ImageSlider,
  parameters: {
    docs: {
      description: {
        component: "Image slider component.",
      },
    },
  },
  argTypes: {
    images: {
      description: "List of images that will be in the slider.",
    },
  },
};

const codeTemplate = '<ImageSlider v-bind="args"/>';

const Template = (args) => ({
  components: { ImageSlider },
  setup() {
    return { args };
  },
  template: codeTemplate,
});

export const ImageSliderStory = Template.bind({});

ImageSliderStory.parameters = {
  docs: {
    source: { code: generateSource(codeTemplate, {}) },
  },
};
ImageSliderStory.args = {
  images: [
    {
      image: "design-system-light.png",
      description: "JavaScript",
      type: "PC",
    },
    {
      image: "public/design-system-dark.png",
      description: "JavaScript",
      type: "PC",
    },
    {
      image: "public/circular-logo.png",
      description: "JavaScript",
      type: "PC",
    },
  ],
};
