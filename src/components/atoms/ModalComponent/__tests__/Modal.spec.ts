import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import ModalComponent from "../ModalComponent.vue";
import { VueWrapper } from "@vue/test-utils/dist/vueWrapper";

describe("ModalComponent", (): void => {
  it("Renders properly", (): void => {
    const wrapper: VueWrapper = mount(ModalComponent, {
      props: {
        showModal: true,
      },
    });
    expect(wrapper.find(".modal").exists()).toBe(true);
  });

  it("Its instantiated hidden", (): void => {
    const wrapper: VueWrapper = mount(ModalComponent, {
      props: {
        showModal: false,
      },
    });
    expect(wrapper.find(".modal").exists()).toBe(false);
  });
});
