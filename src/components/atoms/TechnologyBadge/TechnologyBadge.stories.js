import generateSource from "../../../../.storybook/utils.js";
import TechnologyBadge from "./TechnologyBadge.vue";

export default {
  title: "atoms/TechnologyBadge",
  component: TechnologyBadge,
  parameters: {
    docs: {
      description: {
        component: 'Badge that can display images if you pass a valid technology (in the "src/assets/icons/technologies").'
      },
    },
  },
  argTypes: {
    language: {
      description: "Technology language.",
      table: {
        type: {
          summary: "String",
          detail:
            'In order to display the image, it must be a valid language'
            + '(those are those in the "src/assets/icons/technologies").',
        },
      },
    },
  },
};

const template = '<technologyBadge v-bind="args" />';

const Template = (args) => ({
  components: { TechnologyBadge },
  setup() {
    return { args };
  },
  template: template,
});

/**
* Badge that displays the technology icon.
*/
export const StoryWithExistentTechnology = Template.bind({});

StoryWithExistentTechnology.args = {
  language: "JavaScript",
};

StoryWithExistentTechnology.parameters = {
  docs: {
    description: {
      component: "This is the component that displays any kind of images.",
    },
    source: {
      code: generateSource(template, StoryWithExistentTechnology.args),
    },
  },
};

/**
* Badge that does not display the technology icon as it does not exist.
*/
export const StoryWithNonExistentTechnology = Template.bind({});

StoryWithNonExistentTechnology.args = {
  language: "NonExistent",
};

StoryWithNonExistentTechnology.parameters = {
  docs: {
    source: {
      code: generateSource(template, StoryWithNonExistentTechnology.args),
    },
  },
};
