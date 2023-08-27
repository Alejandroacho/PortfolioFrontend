import axios from "axios";
import { Experience } from "@/assets/types";

const backendUrl: string = import.meta.env.VITE_BACKEND_URL;

class ExperiencesController {
  constructor() {}
  public async getExperiences(): Promise<Experience[]> {
    return axios
      .get(`${backendUrl}/api/experiences/`)
      .then((response) => response.data) as Promise<Experience[]>;
  }
}

export { ExperiencesController };
