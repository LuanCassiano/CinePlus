import React from 'react';
import { Dimensions } from 'react-native';

import { IMAGE_URL } from '../../global/Constants';

import Genre from '../Genre';

import Rating from '../Rating';

import { IMovieList } from './interface/IMovieList';

import * as Styled from './styles';

const MovieList: React.FC<IMovieList> = ({
    data
}: IMovieList) => {
    const { width } = Dimensions.get('screen');
    const imageW = width * 0.9;
    const imageH = imageW * 1.3;

    return (
        <Styled.ListContainer size={width}>
            <Styled.ListMedia
                mediaHeight={imageH}
                mediaWidth={imageW}
                source={{ uri: `${IMAGE_URL}${data.poster_path}` }}
                resizeMode='cover'
            />

            <Styled.ListContent>
                <Styled.ListTitle>{data.title}</Styled.ListTitle>
            </Styled.ListContent>

            <Rating vote_average={data.vote_average} />

            <Genre genres={data.genre_ids} />
        </Styled.ListContainer>
    );
}

export default MovieList;