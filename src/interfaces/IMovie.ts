import { BaseEntity } from "./BaseEntity";

export interface IMovie extends BaseEntity {
    title: string;
    overview: string;
    poster_path: string;
    vote_average: number;
    release_date: string;
    genre_ids: [],
}