import Hero from "./Hero.vue";
import generateSource from "../../../../.storybook/utils.ts";
export default {
  title: "sections/Hero",
  component: Hero,
  parameters: {
    docs: {
      description: {
        component: "Hero section component.",
      },
      story: {
        inline: false,
        iframeHeight: 700,
      },
    },
  },
};

const codeTemplate = '<Hero v-bind="args"/>';

const Template = (args) => ({
  components: { Hero },
  setup() {
    return { args };
  },
  template: codeTemplate,
});

export const HeroStory = Template.bind({});

HeroStory.parameters = {
  docs: {
    source: { code: generateSource(codeTemplate, {}) },
  },
};
