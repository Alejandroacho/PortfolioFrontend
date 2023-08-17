import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import TechnologyBadge from "../TechnologyBadge.vue";
import {VueWrapper} from "@vue/test-utils/dist/vueWrapper";

describe("TechnologyBadge", (): void => {
  it("Renders properly with existent icon", (): void => {
    const language: string = "Vue";
    const wrapper: VueWrapper = mount(TechnologyBadge, {
      props: {
        language: language,
      },
    });
    expect(wrapper.props().language).toBe(language);
    expect(wrapper.find("h3").text()).toBe(language);
    expect(wrapper.find("img").exists()).toBe(true);
    const path: string = "/src/assets/icons/technologies";
    const expectedSrc: string = `${path}/${language.toLowerCase()}.svg`;
    expect(wrapper.find("img").attributes("src")).toBe(expectedSrc);
  });

  it("Renders properly with non-existent icon", (): void => {
    const language: string = "NonExistent";
    const wrapper: VueWrapper = mount(TechnologyBadge, {
      props: {
        language: language,
      },
    });
    expect(wrapper.props().language).toBe(language);
    expect(wrapper.find("h3").text()).toBe(language);
    expect(wrapper.find("img").exists()).toBe(true);
    expect(wrapper.find("img").attributes("style")).toBe("display: none;");
  });
});
