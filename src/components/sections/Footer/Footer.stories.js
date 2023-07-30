import Footer from "./Footer.vue";
import generateSource from "../../../../.storybook/utils.js";
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
        iframeHeight: 120,
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
