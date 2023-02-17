import styled from "styled-components/native";
import { Colors } from "../../global/Colors";
import { FontFamily } from "../../global/Fonts";

export const GenreContent = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

export const TagGenreContainer = styled.View`
    padding: 2px 6px;
    border-width: 1px;
    border-radius: 15px;
    border-color: ${Colors.SECONDARY};
    margin: 0px 5px 10px 0px;
`;

export const TagGenreLabel = styled.Text`
    color: ${Colors.SECONDARY};
    font-size: 12px;
    font-family: ${FontFamily.BOLD};
`;
