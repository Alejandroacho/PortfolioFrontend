import axios from "axios";
import {Certification} from "@/assets/types";

const backendUrl: string = import.meta.env.VITE_BACKEND_URL;


class CertificationsController {
    constructor() {}
    public async getCertifications(): Promise<Certification> {
        return axios.get(`${backendUrl}/api/certifications/`) as Promise<Certification>
    }
}

export { CertificationsController }