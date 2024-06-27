import React from 'react'
import { View, Text , Button} from 'react-native'
import { NavigationProp } from '@react-navigation/native';

interface Props {
    navigation: NavigationProp<any, any>;
  }

export default function Home({ navigation }: Props): JSX.Element {
  return (
    <View>
      <Button title="Movie Detail" onPress={() => navigation.navigate('MovieDetail')} />
    </View>
  )
}