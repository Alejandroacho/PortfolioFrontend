import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import ExperienceCard from "../ExperienceCard.vue";
import { Experience } from "@/assets/types";
import { ImageTypes } from "@/assets/constants";
import { VueWrapper } from "@vue/test-utils/dist/vueWrapper";

describe("ProjectSection", (): void => {
  it("renders properly", (): void => {
    const experience: Experience = {
      id: 1,
      logo: {
        id: 1,
        description: "Logo",
        type: ImageTypes.OTHER,
        url: "design-system-light.png",
      },
      company: "Company",
      position: "Position",
      description:
        "Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description",
      url: "https://www.google.com",
      start_date: "2021-01-01",
      end_date: "2021-01-01",
      time_of_experience: "1 year",
      current: true,
      technologies: [
        {
          id: 1,
          name: "Technology 1",
        },
      ],
    };
    const wrapper: VueWrapper = mount(ExperienceCard, {
      props: {
        experience: experience,
      },
    });
    expect(wrapper.find("h3").text()).toBe(experience.position);
    expect(wrapper.findAll(".image").length).toBe(1);
  });
});
