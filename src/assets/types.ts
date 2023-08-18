import {ImageTypes} from "./constants";


interface Image {
    id: number;
    url: string;
    description: string;
    type: ImageTypes;
}

interface SocialNetwork {
    id: number;
    platform: string;
    url: string;
    nickname: string;
}

interface Author {
    id: number;
    first_name: string;
    last_name: string;
    social_networks: SocialNetwork[];
}

interface Technology {
    id: number;
    name: string;
}

interface Project {
    id: number;
    title: string;
    introduction: string;
    description: string;
    url: string;
    repository: string;
    authors: Author[];
    images: Image[];
    technologies: Technology[];
}

interface Experience {
    id: number;
    logo: Image;
    company: string;
    position: string;
    description: string;
    url: string;
    start_date: string;
    end_date: string;
    current: boolean;
    technologies: Technology[];
}

interface Certification {
    id: number;
    name: string;
    description: string;
    tags: string[];
    url: string;
    file: string;
    image: Image;
}

interface User {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    about: string;
    image: Image;
    author: Author;
    cv: string;
}

export type {
    Image,
    SocialNetwork,
    Author,
    Technology,
    Project,
    Experience,
    Certification,
    User
};
