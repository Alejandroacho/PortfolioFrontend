import ExperienceCard from "./ExperienceCard.vue";
import generateSource from "../../../../.storybook/utils";

export default {
  title: "molecules/ExperienceCard",
  component: ExperienceCard,
  parameters: {
    docs: {
      description: {
        component: "Experience card.",
      },
    },
  },
  argTypes: {
    experience: {
      description:
        "This is a project object. It must follow the structure defined in the backend.",
      table: {
        type: {
          summary: "Object",
          detail:
            "The structure should look like the following: \n" +
            "{\n" +
            "  id: 1,\n" +
            "  logo: {\n" +
            '  company: "Company",\n' +
            '  position: "Position",\n' +
            '  description: "Description",\n' +
            '  url: "https://www.google.com",\n' +
            '  start_date: "2021-01-01",\n' +
            '  end_date: "2021-01-01",\n' +
            '  time_of_experience: "1 year",\n' +
            "  current: true,\n" +
            "  technologies: [\n" +
            "    {\n" +
            "      id: 1,\n" +
            '      name: "Technology 1",\n' +
            "    },\n" +
            "  ],\n" +
            "}",
        },
      },
    },
  },
};

const codeTemplate: string = '<ExperienceCard v-bind="args"/>';

const Template: Function = (args: Object): Object => ({
  components: { ExperienceCard },
  setup() {
    return { args };
  },
  template: codeTemplate,
});

export const ExperienceCardStory: any = Template.bind({});

ExperienceCardStory.args = {
  experience: {
    id: 1,
    logo: {
      id: 1,
      description: "Logo",
      type: "OTHER",
      url: "design-system-light.png",
    },
    company: "Company",
    position: "Position",
    description:
      "Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description",
    url: "https://www.google.com",
    start_date: "2021-01-01",
    end_date: "2021-01-01",
    time_of_experience: "1 year",
    current: true,
    technologies: [
      {
        id: 1,
        name: "Technology 1",
      },
    ],
  },
};

ExperienceCardStory.parameters = {
  docs: {
    source: { code: generateSource(codeTemplate, ExperienceCardStory.args) },
  },
};
