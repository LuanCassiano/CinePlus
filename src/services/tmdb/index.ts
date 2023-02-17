import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { API_KEY, LANGUAGE } from '../../global/Constants';

export const apiSlice = createApi({
    reducerPath: 'tmdbApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.themoviedb.org/3',
    }),
    endpoints: (builder) => ({
        getMovie: builder.query<any, { urlQuery: string }>({
            query: (param) => {
                return `/movie/${param.urlQuery}?api_key=${API_KEY}&language=${LANGUAGE}&page=1`
            }
        }),
    }),
})
export const { useGetMovieQuery } = apiSlice