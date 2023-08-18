import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import ImageSlider from "../ImageSlider.vue";
import {Image} from "@/assets/types";
import {ImageTypes} from "@/assets/constants";
import {VueWrapper} from "@vue/test-utils/dist/vueWrapper";

describe("ImageSlider", (): void => {
  it("renders properly", (): void => {
    const images: Image[] = [
      {
        id: 1,
        description: "Image 1",
        type: ImageTypes.OTHER,
        url: "design-system-light.png",
      },
      {
        id: 2,
        description: "Image 2",
        type: ImageTypes.OTHER,
        url: "design-system-light.png",
      },
      {
        id: 3,
        description: "Image 3",
        type: ImageTypes.OTHER,
        url: "design-system-light.png",
      },
    ];
    const wrapper: VueWrapper = mount(ImageSlider, {
      props: {
        images: images,
      },
    });
    expect(wrapper.findAll("img").length).toBe(images.length);
  });
});
