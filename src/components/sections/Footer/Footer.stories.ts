import Footer from "./Footer.vue";
import generateSource from "../../../../.storybook/utils";

export default {
  title: "sections/Footer",
  component: Footer,
  parameters: {
    docs: {
      description: {
        component: "Footer section component.",
      },
      story: {
        inline: false,
        iframeHeight: 150,
      },
    },
  },
};

const codeTemplate: string = '<Footer v-bind="args"/>';

const Template: Function = (args: Object): Object => ({
  components: { Footer },
  setup() {
    return { args };
  },
  template: codeTemplate,
});

export const FooterStory: any = Template.bind({});

FooterStory.parameters = {
  docs: {
    source: { code: generateSource(codeTemplate, {}) },
  },
};
