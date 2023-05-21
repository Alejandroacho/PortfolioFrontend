import ModalComponent from "./ModalComponent.vue";
import generateSource from "../../../../.storybook/utils.js";

export default {
  title: "atoms/ModalComponent",
  component: ModalComponent,
  parameters: {
    docs: {
      description: {
        component: 'This is a modal component, to show in a modal whatever is needed.'
      },
    },
  },
  argTypes: {
    showModal: {
      description: "Boolean that toggles the modal visibility.",
    },
    close: {
      description: "Function that should closes the modal, and do anything else.",
      table: {
        type: {
          summary: "Function",
        },
      },
    },
    header: {
      description: "Modal header. If is text, it will be H1 and bold.",
      table: {
        type: {
          summary: "Slot",
        },
      },
    },
    body: {
      description: "Modal Body.",
      table: {
        type: {
          summary: "Slot",
        },
      },
    },
    footer: {
      description: "Modal footer.",
      table: {
        type: {
          summary: "Slot",
        },
      },
    },
  },
};

const codeTemplate = `
<ModalComponent v-bind="args">
  <template v-slot:header>
    <h2>Project name</h2>
  </template>
  <template v-slot:body>
    <p>Project description</p>
  </template>
  <template v-slot:footer>
    <p>Footer</p>
  </template>
</ModalComponent>
`;

const Template = (args) => ({
  components: { ModalComponent },
  setup() {
    return { args };
  },
  template: codeTemplate,
});

export const ModalComponentStory = Template.bind({});

ModalComponentStory.args = {
  showModal: false,
};

ModalComponentStory.parameters = {
  docs: {
    source: { code: generateSource(codeTemplate, ModalComponentStory.args) },
  },
};
