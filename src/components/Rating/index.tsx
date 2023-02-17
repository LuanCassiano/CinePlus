import React from 'react';
import { IRating } from './interface/IRating';

import * as Styled from './styles';

import IconStar from '../../assets/icons/star.svg';

const Rating: React.FC<IRating> = ({ vote_average }: IRating) => {

    return (
        <Styled.RatingContainer>
            <Styled.RatingLabel>{vote_average}</Styled.RatingLabel>
            <IconStar width={15} height={15} />
        </Styled.RatingContainer>
    );
}

export default Rating;