import Hero from "./Hero.vue";
import generateSource from "../../../../.storybook/utils";

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

const codeTemplate: string = '<Hero v-bind="args"/>';

const Template: Function = (args: Object): Object => ({
  components: { Hero },
  setup() {
    return { args };
  },
  template: codeTemplate,
});

export const HeroStory: any = Template.bind({});

HeroStory.parameters = {
  docs: {
    source: { code: generateSource(codeTemplate, {}) },
  },
};
