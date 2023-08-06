import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import ProjectSection from "../ProjectCard.vue";

describe("ProjectSection", () => {
  it("renders properly", () => {
    const project = {
      id: 1,
      title: "Project 1",
      description: "Project 1 description",
      url: "https://www.google.com",
      is_public: true,
      repository: "https://www.github.com",
      authors: [
        {
          id: 1,
          first_name: "Author",
          last_name: "Author",
          social_networks: [
            {
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
          type: "CARD",
          image: "design-system-light.png",
        },
        {
          id: 2,
          description: "Image 2",
          type: "PC",
          image: "design-system-light.png",
        },
        {
          id: 3,
          description: "Image 3",
          type: "PC",
          image: "design-system-light.png",
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
    const wrapper = mount(ProjectSection, {
      props: {
        project: project,
      },
    });
    expect(wrapper.find("h2").text()).toBe(project.title);
    expect(wrapper.findAll("img").length).toBe(1);
  });
});
