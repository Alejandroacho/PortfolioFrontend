import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import SpinningLoader from "../SpinningLoader.vue";

describe("ImageDisplay", () => {
  it("renders properly with message", () => {
    const loadingMessage = "Items are loading...";
    const wrapper = mount(SpinningLoader, {
      props: {
        message: loadingMessage,
      },
    });
    expect(wrapper.props().message).toBe(loadingMessage);
    expect(wrapper.find("h3").text()).toBe(loadingMessage);
  });

  it("renders properly with default message", () => {
    const loadingMessage = "Content is loading...";
    const wrapper = mount(SpinningLoader, { props: {} });
    expect(wrapper.props().message).toBe(loadingMessage);
    expect(wrapper.find("h3").text()).toBe(loadingMessage);
  });
});
