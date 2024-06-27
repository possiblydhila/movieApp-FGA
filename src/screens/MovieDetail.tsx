import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

interface Props {
  navigation: NavigationProp<any, any>;
}

export default function MovieDetail({ navigation }: Props): JSX.Element {
  return (
    <View>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}