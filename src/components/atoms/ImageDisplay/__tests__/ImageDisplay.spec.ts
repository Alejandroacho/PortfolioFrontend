import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import ImageDisplay from "../ImageDisplay.vue";
import {VueWrapper} from "@vue/test-utils/dist/vueWrapper";
import {Image} from "@/assets/types";
import {ImageTypes} from "@/assets/constants";

describe("ImageDisplay", (): void => {
  it("Renders properly with image", (): void => {
    const image: Image = {
      id: 1,
      url: "design-system-light.png",
      description: "JavaScript",
      type: ImageTypes.OTHER,
    };
    const wrapper: VueWrapper = mount(ImageDisplay, {
      props: {
        image: image,
      },
    });
    expect(wrapper.props().image).toStrictEqual(image);
    expect(wrapper.find("img").exists()).toBe(true);
    expect(wrapper.find("img").attributes("src")).toBe(image.url);
  });

  it("Does not renders without url", (): void => {
    const wrapper: VueWrapper = mount(ImageDisplay, {
      props: {
        image: {
          id: 1,
          url: null as string,
          description: "JavaScript",
          type: ImageTypes.OTHER,
        },
      },
    });
    expect(wrapper.find("img").exists()).toBe(false);
  });

  it("Does not renders with non-existent image", (): void => {
    const wrapper: VueWrapper = mount(ImageDisplay, {
      props: {
        image: {
          id: 1,
          url: "public/nonexistent.png",
          description: "JavaScript",
          type: ImageTypes.CARD,
        },
      },
    });
    expect(wrapper.find("img").attributes("style")).toBe("display: none;");
  });
});
