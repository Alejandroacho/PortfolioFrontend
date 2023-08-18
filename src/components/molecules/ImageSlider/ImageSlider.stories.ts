import ImageSlider from "./ImageSlider.vue";
import generateSource from "../../../../.storybook/utils";

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

const codeTemplate: string = '<ImageSlider v-bind="args"/>';

const Template: Function = (args: Object): Object => ({
  components: { ImageSlider },
  setup() {
    return { args };
  },
  template: codeTemplate,
});

export const ImageSliderStory: any = Template.bind({});

ImageSliderStory.parameters = {
  docs: {
    source: { code: generateSource(codeTemplate, {}) },
  },
};
ImageSliderStory.args = {
  images: [
    {
      url: "design-system-light.png",
      description: "JavaScript",
      type: "PC",
    },
    {
      url: "public/design-system-dark.png",
      description: "JavaScript",
      type: "PC",
    },
    {
      url: "public/circular-logo.png",
      description: "JavaScript",
      type: "PC",
    },
  ],
};
