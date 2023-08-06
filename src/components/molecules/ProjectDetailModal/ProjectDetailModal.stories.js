import ProjectDetailModal from "./ProjectDetailModal.vue";
import generateSource from "../../../../.storybook/utils.js";

export default {
  title: "molecules/ProjectDetailModal",
  component: ProjectDetailModal,
  parameters: {
    docs: {
      description: {
        component:
          "This is a modal component, to show in a modal whatever is needed.",
      },
    },
  },
  argTypes: {
    showModal: {
      description: "Boolean that toggles the modal visibility.",
    },
    close: {
      description:
        "Function that should closes the modal, and do anything else.",
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
<ProjectDetailModal v-bind="args">
  <template v-slot:header>
    <h2>Project name</h2>
  </template>
  <template v-slot:body>
    <p>Project description</p>
  </template>
  <template v-slot:footer>
    <p>Footer</p>
  </template>
</ProjectDetailModal>
`;

const Template = (args) => ({
  components: { ProjectDetailModal },
  setup() {
    return { args };
  },
  template: codeTemplate,
});

export const ProjectDetailModalComponentStory = Template.bind({});

ProjectDetailModalComponentStory.args = {
  showModal: false,
  project: {
    id: 1,
    title: "Project 1",
    introduction:
      "Project 1 introduction Project 1 introduction Project 1 introduction Project 1 introduction",
    description:
      "Project 1 description Project 1 description Project 1 description Project 1 description Project 1 description Project 1 description Project 1 description Project 1 description Project 1 description Project 1 description Project 1 description Project 1 description Project 1 description Project 1 description Project 1 description Project 1 description Project 1 description Project 1 description Project 1 description Project 1 description Project 1 description Project 1 description Project 1 description Project 1 description Project 1 description Project 1 description Project 1 description Project 1 description Project 1 description Project 1 description Project 1 description Project 1 description Project 1 description Project 1 description Project 1 description Project 1 description",
    url: "https://www.google.com",
    is_public: true,
    repository: "https://www.github.com",
    authors: [
      {
        id: 1,
        first_name: "Author",
        last_name: "Last Name",
        social_networks: [
          {
            platform: "github",
            url: "https://www.github.com",
            nickname: "author",
          },
        ],
      },
    ],
    images: [
      {
        id: 1,
        description: "Image 1",
        type: "CARD",
        image: "design-system-light.png",
      },
      {
        id: 2,
        description: "Image 2",
        type: "PC",
        image:
          "https://media.cleanshot.cloud/media/41535/Fb9ALt4elFwCkd0PoeLpuvmQ8jlGXyENixFLEtXQ.jpeg?Expires=1691368217&Signature=intHxjAxCM1UngVg2Mc6SC118eTX99o1omdlpZgly3SF5sC-~PjErwDec6Jt5bpvHANB-oGh4ttxxCzWaoKfBgydQv7JNcdqegCRxJjnLb07OAq-WIrW7s5~tU8Am2GtCKhRXqhXrcapjD079YZodbqHfVFGgAkunxy~381snbU--YOg2km1VJTuHEKpxpVSrBvD75yQ3U-8dYfcRchGBBrt5zBpBHkBH68DDV3gNMih9b-6aE5L~00SE89TypIHZGnnH6U-D9lI9Yzhjo9mNq7GxcQ2s-ebvFCAx8HuR4vOGxSh61PegVFnw~1rGhI5Q-5h48pQqopE0tkpJ8GiUA__&Key-Pair-Id=K269JMAT9ZF4GZ",
      },
      {
        id: 3,
        description: "Image 3",
        type: "OTHER",
        image:
          "https://media.cleanshot.cloud/media/41535/H3SDlXgk7Ku5GAFolraXo7uxK5eg6Pe6uLIKjqxN.jpeg?Expires=1691368239&Signature=LbSDhADt7xk5NhTo3k399Jl9LNm3Xw5oC4uljzvowMGCvtNTRd2vvDAyIM5x3dWVqmY65Vz~eOj3obgKZCEHlSNoh6DHUh3HH2hmgmLcMVHloGX~4vb-Hy80mmb3K3gZYLY9Pe~uZYIqZckpKqY~0hLg0lPXE5Rz68sF~aV9Cb6lzLgpERXVYOwoLslufjUWaD62EGVyIpb5baL5KzL4P9nPCB8bVPNHivz7DRvS3w0wz9CH85sLisxCiQnmLNe6VQXvAabOb7Cvn4EQmMrOA1TL6G7nbNyKut~2AY9CGByjLGHC~QO87wxbOhrpmbeuUWnLhnBbJ5gUR6YgeNNP3Q__&Key-Pair-Id=K269JMAT9ZF4GZ",
      },
    ],
    technologies: [
      {
        id: 1,
        name: "Python",
      },
      {
        id: 2,
        name: "JavaScript",
      },
      {
        id: 3,
        name: "Django",
      },
      {
        id: 4,
        name: "Vue",
      },
      {
        id: 5,
        name: "PostgreSQL",
      },
      {
        id: 5,
        name: "GitHub",
      },
    ],
  },
};

ProjectDetailModalComponentStory.parameters = {
  docs: {
    source: {
      code: generateSource(codeTemplate, ProjectDetailModalComponentStory.args),
    },
  },
};
