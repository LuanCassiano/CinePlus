import { IMovie } from "../interfaces/IMovie";

export const getFirstTenItems = (data?: IMovie[]) => {
    const newArr = data?.slice(0, 10);

    return newArr;
}