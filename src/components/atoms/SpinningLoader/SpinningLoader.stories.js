import SpinningLoader from "./SpinningLoader.vue";

export default {
  title: "atoms/SpinningLoader",
  component: SpinningLoader,
};

const Template = (args) => ({
  components: { SpinningLoader },
  setup() {
    return { args };
  },
  template: '<SpinningLoader v-bind="args"/>',
});

export const SpinningLoaderStory = Template.bind({});

SpinningLoaderStory.args = {};
