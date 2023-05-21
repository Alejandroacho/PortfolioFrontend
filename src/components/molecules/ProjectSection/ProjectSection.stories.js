import ProjectSection from "./ProjectSection.vue";
import generateSource from "../../../../.storybook/utils.js";

export default {
  title: "molecules/ProjectSection",
  component: ProjectSection,
  parameters: {
    docs: {
      description: {
        component: 'Project section that will display images and a button. The button should open the project detail section component.'
      },
    },
  },
  argTypes: {
    project: {
      description: "This is a project object. It must follow the structure defined in the backend.",
      table: {
        type: {
          summary: 'Object',
          detail: 'The structure should look like the following: \n' +
          '{\n' +
          '  id: 1,\n' +
          '  title: "Project 1",\n' +
          '  description: "Project 1 description",\n' +
          '  url: "https://www.google.com",\n' +
          '  is_public: true,\n' +
          '  repository: "https://www.github.com",\n' +
          '  authors: [\n' +
          '    {\n' +
          '      id: 1,\n' +
          '      first_name: "Author",\n' +
          '      last_name: "Author",\n' +
          '      social_networks: [\n' +
          '        {\n' +
          '          platform: "github",\n' +
          '          url: "https://www.github.com",\n' +
          '          nickname: "author",\n' +
          '        },\n' +
          '      ],\n' +
          '    },\n' +
          '  ],\n' +
          '  images: [\n' +
          '    {\n' +
          '      id: 1,\n' +
          '      description: "Image 1",\n' +
          '      type: "PC",\n' +
          '      image: "public/design-system-light.png",\n' +
          '    },\n' +
          '  ],\n' +
          '}',
        }
      },
    },
  },
};

const codeTemplate = '<ProjectSection v-bind="args"/>'

const Template = (args) => ({
  components: { ProjectSection },
  setup() {
    return { args };
  },
  template: codeTemplate,
});

export const ProjectSectionStory = Template.bind({});

ProjectSectionStory.args = {
  project: {
    id: 1,
    title: "Project 1",
    description: "Project 1 description",
    url: "https://www.google.com",
    is_public: true,
    repository: "https://www.github.com",
    authors: [
      {
        id: 1,
        first_name: "Author",
        last_name: "Author",
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
        type: "PC",
        image: "public/design-system-light.png",
      },
      {
        id: 2,
        description: "Image 2",
        type: "PC",
        image: "public/design-system-light.png",
      },
      {
        id: 3,
        description: "Image 3",
        type: "OTHER",
        image: "public/design-system-light.png",
      },
    ],
  },
};

ProjectSectionStory.parameters = {
  docs: {
    source: { code: generateSource(codeTemplate, ProjectSectionStory.args) },
  },
};
