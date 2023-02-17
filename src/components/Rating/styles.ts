import styled from "styled-components/native";
import { Colors } from "../../global/Colors";
import { FontFamily } from "../../global/Fonts";

export const RatingContainer = styled.View`
    flex-direction: row;
    margin: 10px 0px;
    align-items: center;
`;

export const RatingLabel = styled.Text`
    font-size: 16px;
    font-family: ${FontFamily.BOLD};
    color: ${Colors.LIGHT};
    margin-right: 5px;
`;
