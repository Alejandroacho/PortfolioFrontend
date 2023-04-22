import ModalComponent from "./ModalComponent.vue";

export default {
  title: "atoms/ModalComponent",
  component: ModalComponent,
};

const Template = (args) => ({
  components: { ModalComponent },
  setup() {
    return { args };
  },
  template: '<ModalComponent v-bind="args"/>',
});

export const ModalComponentStory = Template.bind({});

ModalComponentStory.args = {};
