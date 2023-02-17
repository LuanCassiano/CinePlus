import React from 'react';

import { IGenre } from './interface/IGenre';

import * as Styled from './styles';

const Genre: React.FC<IGenre> = ({ genres }: IGenre) => {
    return (
        <Styled.GenreContent>
            {genres.map((genre, index) => (
                <Styled.TagGenreContainer key={`genre-${index}`}>
                    <Styled.TagGenreLabel>{genre}</Styled.TagGenreLabel>
                </Styled.TagGenreContainer>
            ))}
        </Styled.GenreContent>
    );
}

export default Genre;