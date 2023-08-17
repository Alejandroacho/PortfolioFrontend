import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import TechnologyBadge from "../TechnologyBadge.vue";

describe("TechnologyBadge", () => {
  it("Renders properly with existent icon", () => {
    const language = "Vue";
    const wrapper = mount(TechnologyBadge, {
      props: {
        language: language,
      },
    });
    expect(wrapper.props().language).toBe(language);
    expect(wrapper.find("h3").text()).toBe(language);
    expect(wrapper.find("img").exists()).toBe(true);
    const path = "/src/assets/icons/technologies";
    const expectedSrc = `${path}/${language.toLowerCase()}.svg`;
    expect(wrapper.find("img").attributes("src")).toBe(expectedSrc);
  });

  it("Renders properly with non-existent icon", () => {
    const language = "NonExistent";
    const wrapper = mount(TechnologyBadge, {
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
