import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationProp } from '@react-navigation/native';

const MovieDetail = ({ navigation }: any): any => {
    const fetchData = (): void => {
        const ACCESS_TOKEN = process.env.EXPO_PUBLIC_API_ACCESS_TOKEN
        const URL = process.env.EXPO_PUBLIC_API_URL
    
        if (ACCESS_TOKEN == null || URL == null) {
          throw new Error('ENV not found')
        }
    
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${ACCESS_TOKEN}`,
          },
        }
    
        fetch(URL, options)
          .then(async (response) => await response.json())
          .then((response) => {
            console.log(response)
          })
          .catch((err) => {
            console.error(err)
          })
      }
  
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Movie Detail Page</Text>
        <Button
          title="Fetch Data"
          onPress={() => {
            fetchData()
          }}
        />
      </View>
    )
  }
  
  export default MovieDetail