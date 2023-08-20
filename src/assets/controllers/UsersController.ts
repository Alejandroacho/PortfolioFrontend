import axios from "axios";
import {User} from "@/assets/types";

const backendUrl: string = import.meta.env.VITE_BACKEND_URL;


class UsersController {
    constructor() {}
    public async getUsers(): Promise<User[]> {
        return axios.get(`${backendUrl}/api/users/`).then((response) => response.data) as Promise<User[]>
    }
}

export { UsersController }