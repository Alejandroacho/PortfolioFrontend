import axios from "axios";
import {Project} from "@/assets/types";

const backendUrl: string = import.meta.env.VITE_BACKEND_URL;


class ProjectsController {
    constructor() {}
    public async getProjects(): Promise<Project[]> {
        return axios.get(`${backendUrl}/api/projects/`).then((response) => response.data) as Promise<Project[]>
    }
}

export { ProjectsController }