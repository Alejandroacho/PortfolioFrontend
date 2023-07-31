import NavbarSection from "./Navbar.vue";
import generateSource from "../../../../.storybook/utils.js";
export default {
  title: "sections/Navbar",
  component: NavbarSection,
  parameters: {
    docs: {
      description: {
        component: "Navbar section component.",
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
  components: { NavbarSection },
  setup() {
    return { args };
  },
  template: codeTemplate,
});

export const NavbarStory = Template.bind({});

NavbarStory.parameters = {
  docs: {
    source: { code: generateSource(codeTemplate, {}) },
  },
};
