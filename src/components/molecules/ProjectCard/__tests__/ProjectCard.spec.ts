import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import ProjectSection from "../ProjectCard.vue";
import { Project } from "@/assets/types";
import { ImageTypes } from "@/assets/constants";
import { VueWrapper } from "@vue/test-utils/dist/vueWrapper";

describe("ProjectSection", (): void => {
  it("renders properly", (): void => {
    const project: Project = {
      id: 1,
      title: "Project 1",
      introduction: "Project 1 Introduction",
      description: "Project 1 description",
      url: "https://www.google.com",
      repository: "https://www.github.com",
      authors: [
        {
          id: 1,
          first_name: "Author",
          last_name: "Author",
          social_networks: [
            {
              id: 1,
              platform: "github",
              url: "https://www.github.com",
              nickname: "author",
            },
          ],
        },
      ],
      images: [
        {
          id: 1,
          description: "Image 1",
          type: ImageTypes.CARD,
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
      ],
      technologies: [
        {
          id: 1,
          name: "Python",
        },
        {
          id: 2,
          name: "JavaScript",
        },
        {
          id: 3,
          name: "Django",
        },
        {
          id: 4,
          name: "Vue",
        },
        {
          id: 5,
          name: "PostgreSQL",
        },
        {
          id: 5,
          name: "GitHub",
        },
      ],
    };
    const wrapper: VueWrapper = mount(ProjectSection, {
      props: {
        project: project,
      },
    });
    expect(wrapper.find("h2").text()).toBe(project.title);
    expect(wrapper.findAll("img").length).toBe(1);
  });
});
