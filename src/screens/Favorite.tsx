import React, { useEffect, useState } from 'react';
import { View, StatusBar, StyleSheet, Text, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MovieItem from '../components/MovieItem';
import type { Movie } from '../types/app';
import { useIsFocused } from '@react-navigation/native';

export default function Favorite(): JSX.Element {

  const [favoriteMovies, setFavoriteMovies] = useState<Movie[]>([]);
  const { width } = Dimensions.get('window')
  const isFocused = useIsFocused()

  useEffect(() => {
    if (isFocused) {
      fetchFavoriteMovies();
    }
  }, [isFocused]);

  const fetchFavoriteMovies = async (): Promise<void> => {
    try {
      const favoriteMoviesData: string | null = await AsyncStorage.getItem('@FavoriteList');
      if (favoriteMoviesData) {
        const favoriteMoviesList: Movie[] = JSON.parse(favoriteMoviesData);
        setFavoriteMovies(favoriteMoviesList);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const renderSeparator = (): JSX.Element => {
    return <View style={styles.separator} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={favoriteMovies}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.itemContainer}>
            <MovieItem
              movie={item}
              size={{ width: width / 3 - 24, height: (width / 3 - 24) * 1.5 }}
              coverType="poster"
            />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
        numColumns={3}
        ItemSeparatorComponent={renderSeparator}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight ?? 32,
    flex: 1,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  listContainer: {
    paddingBottom: 16,
    justifyContent: 'space-between',
  },
  itemContainer: {
    padding: 4,
  },
  separator: {
    width: '100%',
    height: 8,
  },
})