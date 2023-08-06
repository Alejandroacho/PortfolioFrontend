import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import ImageDisplay from "../ImageDisplay.vue";

describe("ImageDisplay", () => {
  it("Renders properly with image", () => {
    const image = {
      image: "design-system-light.png",
      description: "JavaScript",
      type: "PC",
    };
    const wrapper = mount(ImageDisplay, {
      props: {
        image: image,
      },
    });
    expect(wrapper.props().image).toStrictEqual(image);
    expect(wrapper.find("img").exists()).toBe(true);
    expect(wrapper.find("img").attributes("src")).toBe(image.image);
  });

  it("Does not renders without url", () => {
    const wrapper = mount(ImageDisplay, {
      props: {
        image: {
          type: "PC",
        },
      },
    });
    expect(wrapper.find("img").exists()).toBe(false);
  });

  it("Does not renders with non-existent image", () => {
    const wrapper = mount(ImageDisplay, {
      props: {
        image: {
          image: "public/nonexistent.png",
          description: "JavaScript",
          type: "PC",
        },
      },
    });
    expect(wrapper.find("img").attributes("style")).toBe("display: none;");
  });
});
