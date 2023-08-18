import Footer from "./Footer.vue";
import generateSource from "../../../../.storybook/utils.ts";
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

const codeTemplate = '<Footer v-bind="args"/>';

const Template = (args) => ({
  components: { Footer },
  setup() {
    return { args };
  },
  template: codeTemplate,
});

export const FooterStory = Template.bind({});

FooterStory.parameters = {
  docs: {
    source: { code: generateSource(codeTemplate, {}) },
  },
};
