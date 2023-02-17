import styled from "styled-components/native";
import { Colors } from "../../global/Colors";
import { FontFamily } from "../../global/Fonts";

interface IListContainerStyleProps {
    size: number
}

interface IListMediaStyleProps {
    mediaWidth: number;
    mediaHeight: number;
}

export const ListContainer = styled.TouchableOpacity<IListContainerStyleProps>`
    width: ${(props) => props.size}px;
    align-items: center;
    justify-content: center;
`;

export const ListMedia = styled.Image<IListMediaStyleProps>`
    border-radius: 10px;
    width: ${(props) => props.mediaWidth}px;
    height: ${(props) => props.mediaHeight}px;
`;

export const ListContent = styled.Text`
    margin-top: 10px;
`;

export const ListTitle = styled.Text`
    font-family: ${FontFamily.BOLD};
    font-size: 16px;
    text-align: center;
    color: ${Colors.WHITE};
`;
