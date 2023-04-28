import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import ModalComponent from "../ModalComponent.vue";

describe("ModalComponent", () => {
  it("Renders properly", () => {
    const wrapper = mount(ModalComponent, {
      props: {
        showModal: true,
      },
    });
    expect(wrapper.find(".modal").exists()).toBe(true);
  });

  it("Its instantiated hidden", () => {
    const wrapper = mount(ModalComponent, {
      props: {
        showModal: false,
      },
    });
    expect(wrapper.find(".modal").exists()).toBe(false);
  });

  it("Its closed", async () => {
    const wrapper = mount(ModalComponent, {
      props: {
        showModal: true,
      },
    });
    expect(wrapper.find(".modal").exists()).toBe(true);
    wrapper.find(".close-button").trigger("click");
    await wrapper.vm.$nextTick();
    expect(wrapper.find(".modal").exists()).toBe(false);
  });
});
