import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, StyleSheet, Animated } from 'react-native';

import { IMovieTransformedData } from '../../interfaces/IMovieTransformedData';

import { useGetMovieQuery } from '../../services/tmdb'

import Container from '../../components/Container';

import { IMAGE_URL } from '../../global/Constants';

import { movieTransformData } from '../../utils/movieHelper';

import * as Styled from './styles';

import Title from '../../components/Title';
import MovieList from '../../components/MovieList';

const Home: React.FC = () => {
    const { width } = Dimensions.get('screen');

    const scrollX = useRef(new Animated.Value(0)).current;

    const { data } = useGetMovieQuery({ urlQuery: 'now_playing' });

    const [upcomingMovies, setUpcomoingMovies] = useState<IMovieTransformedData[]>([]);

    useEffect(() => {
        const movies = movieTransformData(data?.results);

        setUpcomoingMovies(movies);
    }, [data])

    return (
        <Container>
            <Styled.FillBackgroundImageContent style={StyleSheet.absoluteFillObject}>
                {upcomingMovies?.map((item, index) => {
                    const inputRange = [
                        (index - 1) * width,
                        index * width,
                        (index + 1) * width
                    ]

                    const opacity = scrollX.interpolate({
                        inputRange,
                        outputRange: [0, 1, 0]
                    })
                    return (
                        <Animated.Image
                            key={`image-${index}`}
                            source={{ uri: `${IMAGE_URL}${item.poster_path}` }}
                            style={[
                                StyleSheet.absoluteFillObject,
                                {
                                    opacity
                                }
                            ]}
                            blurRadius={30}
                        />
                    )
                })}
            </Styled.FillBackgroundImageContent>

            <Styled.Content>
                <Title>Em cartaz</Title>
            </Styled.Content>

            <Animated.FlatList
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => <MovieList data={item} />}
                data={upcomingMovies}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: true }
                )}
            />
        </Container>
    );
}

export default Home;