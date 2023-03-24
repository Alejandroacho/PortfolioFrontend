import TechnologyBadge from "./TechnologyBadge.vue";

export default {
  title: "atoms/TechnologyBadge",
  component: TechnologyBadge,
};

const Template = (args) => ({
  components: { TechnologyBadge },
  setup() {
    return { args };
  },
  template: '<technologyBadge v-bind="args" />',
});

export const StoryWithImage = Template.bind({});

StoryWithImage.args = {
  language: "JavaScript",
};
