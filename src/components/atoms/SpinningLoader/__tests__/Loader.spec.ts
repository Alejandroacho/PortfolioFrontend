import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import SpinningLoader from "../SpinningLoader.vue";
import { VueWrapper } from "@vue/test-utils/dist/vueWrapper";

describe("ImageDisplay", (): void => {
  it("renders properly with message", (): void => {
    const loadingMessage: string = "Items are loading...";
    const wrapper: VueWrapper = mount(SpinningLoader, {
      props: {
        message: loadingMessage,
      },
    });
    expect(wrapper.props().message).toBe(loadingMessage);
    expect(wrapper.find("h3").text()).toBe(loadingMessage);
  });

  it("renders properly with default message", (): void => {
    const wrapper: VueWrapper = mount(SpinningLoader, { props: {} });
    expect(wrapper.props().message).toBeUndefined();
  });
});
