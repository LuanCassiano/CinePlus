import { IMovie } from "../interfaces/IMovie";
import { IMovieTransformedData } from "../interfaces/IMovieTransformedData";

export const movieTransformData = (data: IMovie[]): IMovieTransformedData[] => {
    if (data === undefined) return [];

    const genres = {
        28: 'Ação',
        12: 'Aventura',
        16: 'Animação',
        35: 'Comédia',
        80: 'Crime',
        99: 'Documentário',
        18: 'Drama',
        10751: 'Família',
        14: 'Fantasia',
        36: 'História',
        27: 'Terror',
        10402: 'Música',
        9648: 'Mistério',
        10749: 'Romance',
        878: 'Ficção científica',
        10770: 'Cinema TV',
        53: 'Thriller',
        10752: 'Guerra',
        37: 'Faroeste'
    }

    const arr: IMovieTransformedData[] = data.map((item => ({
        id: String(item.id),
        title: item.title,
        overview: item.overview,
        vote_average: item.vote_average,
        release_date: item.release_date,
        poster_path: item.poster_path,
        genre_ids: item?.genre_ids?.map((genre) => genres[genre])
    })))

    return arr;
}