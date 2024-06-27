import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationProp } from '@react-navigation/native';

interface Props {
  navigation: NavigationProp<any, any>;
}

export default function MovieDetail({ navigation }: Props): JSX.Element {
  return (
    <View style={styles.container}>
        <Text>MOVIE DETAIL</Text>
      <Button title="Go Back" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      marginBottom: 20, // Add some space between the text and button
    },
  });