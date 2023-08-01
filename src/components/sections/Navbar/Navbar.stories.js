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
        iframeHeight: 50,
      },
    },
  },
  argTypes: {
    scrollPosition: {
      description:
        "Set this prop to higher than 600 in order to show the logo.",
    },
  },
};

const codeTemplate = '<NavbarSection v-bind="args"/>';

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

NavbarStory.args = {
  scrollPosition: 0,
};
