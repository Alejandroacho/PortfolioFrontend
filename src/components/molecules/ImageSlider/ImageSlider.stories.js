import ImageSlider from "./ImageSlider.vue";
import generateSource from "../../../../.storybook/utils.js";
export default {
    title: "molecules/ImageSlider",
    component: ImageSlider,
    parameters: {
        docs: {
            description: {
                component: "Content loader, to show while the content is loading.",
            },
        },
    },
    argTypes: {
        message: {
            description: "Message displayed while loading.",
        },
    },
};

const codeTemplate = '<ImageSlider v-bind="args"/>';

const Template = (args) => ({
    components: { ImageSlider },
    setup() {
        return { args };
    },
    template: codeTemplate,
});

export const ImageSliderStory = Template.bind({});

ImageSliderStory.parameters = {
    docs: {
        source: { code: generateSource(codeTemplate, {}) },
    },
};
ImageSliderStory.args = {};