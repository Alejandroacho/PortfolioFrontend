import {ImageTypes} from "./contants";


interface Image {
    id: number;
    url: string;
    description: string;
    type: ImageTypes;
}

export type {Image};
