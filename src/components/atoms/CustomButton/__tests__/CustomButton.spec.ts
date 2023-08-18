import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import CustomButton from "../CustomButton.vue";
import { VueWrapper } from "@vue/test-utils/dist/vueWrapper";

describe("CustomButton", (): void => {
  it("renders properly with message", (): void => {
    const message: string = "Button";
    const wrapper: VueWrapper = mount(CustomButton, {
      props: {
        message: message,
      },
    });
    expect(wrapper.props().message).toBe(message);
    expect(wrapper.find("span").text()).toBe(message);
  });

  it("fails render without message", (): void => {
    const wrapper: VueWrapper = mount(CustomButton);
    expect(wrapper.props().message).toBe(undefined);
    expect(wrapper.find("span").text()).toBe("");
  });

  it("call the action when clicking", (): void => {
    const message: string = "Button";
    const wrapper: VueWrapper = mount(CustomButton, {
      props: {
        message: message,
      },
    });
    expect(wrapper.props().message).toBe(message);
    expect(wrapper.find("span").text()).toBe(message);
    wrapper.trigger("click");
    expect(wrapper.emitted().handleClick).toBeTruthy();
  });

  it("renders with primary class", (): void => {
    const message: string = "Button";
    const wrapper: VueWrapper = mount(CustomButton, {
      props: {
        message: message,
        type: "primary",
      },
    });
    expect(wrapper.props().message).toBe(message);
    expect(wrapper.props().type).toBe("primary");
    expect(wrapper.find("button").classes()).toContain("primary");
  });

  it("renders with secondary class", (): void => {
    const message: string = "Button";
    const wrapper: VueWrapper = mount(CustomButton, {
      props: {
        message: message,
        type: "secondary",
      },
    });
    expect(wrapper.props().message).toBe(message);
    expect(wrapper.props().type).toBe("secondary");
    expect(wrapper.find("button").classes()).toContain("secondary");
  });

  it("renders with text class", (): void => {
    const message: string = "Button";
    const wrapper: VueWrapper = mount(CustomButton, {
      props: {
        message: message,
        type: "text",
      },
    });
    expect(wrapper.props().message).toBe(message);
    expect(wrapper.props().type).toBe("text");
    expect(wrapper.find("button").classes()).toContain("text");
  });

  it("renders with magic class", (): void => {
    const message: string = "Button";
    const wrapper: VueWrapper = mount(CustomButton, {
      props: {
        message: message,
        type: "magic",
      },
    });
    expect(wrapper.props().message).toBe(message);
    expect(wrapper.props().type).toBe("magic");
    expect(wrapper.find("button").classes()).toContain("magic");
  });
});
