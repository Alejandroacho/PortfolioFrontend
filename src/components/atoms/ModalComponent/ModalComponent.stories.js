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
  template: `
  <ModalComponent v-bind="args">
    <template v-slot:header>
      <h2>Project name</h2>
    </template>
    <template v-slot:body>
      <p>Project description</p>
    </template>
    <template v-slot:footer>
      <button>Close</button>
    </template>
  </ModalComponent>
  `,
});

export const ModalComponentStory = Template.bind({});

ModalComponentStory.args = {
  showModal: true,
};
