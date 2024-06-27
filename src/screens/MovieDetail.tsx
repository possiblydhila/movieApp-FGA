import React, { useState, useEffect } from 'react'
import { Text, View } from 'react-native'

const MovieDetail = ({ route }: any): JSX.Element => {
  const { id } = route.params
  const [movieData, setMovieData] = useState<any>({})

  useEffect(() => {
    fetch(`/movie/${id}`)
      .then((response) => response.json())
      .then((data) => setMovieData(data))
      .catch((error) => console.error(error))
  }, [id]) // run the effect when the id changes

  return (
    <View
      style={{
        display: 'flex',
        alignItems: 'center',
        marginTop: 32,
      }}
    >
      <Text style={{ fontSize: 30 }}>Movie ID: {id}</Text>
      {movieData && ( // only render the movie data if it's available
        <View>
          <Text>Movie Title: {movieData?.title}</Text>
          <Text>Movie Description: {movieData?.overview}</Text>
          {/* render other movie data fields here */}
        </View>
      )}
    </View>
  )
}

export default MovieDetail
