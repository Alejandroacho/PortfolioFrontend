import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import ImageSlider from "../ImageSlider.vue";

describe("ImageSlider", () => {
  it("renders properly", () => {
    const images = [
      {
        id: 1,
        description: "Image 1",
        type: "PC",
        image: "design-system-light.png",
      },
      {
        id: 2,
        description: "Image 2",
        type: "PC",
        image: "design-system-light.png",
      },
      {
        id: 3,
        description: "Image 3",
        type: "PC",
        image: "design-system-light.png",
      },
    ];
    const wrapper = mount(ImageSlider, {
      props: {
        images: images,
      },
    });
    expect(wrapper.findAll("img").length).toBe(images.length);
  });
});
