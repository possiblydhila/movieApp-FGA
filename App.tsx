import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import BottomTabNavigator from './src/navigations/BottomTabNavigation'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './src/screens/Home';
import Detail from './src/screens/MovieDetail';
import Root from './src/navigations/Root';
import MovieDetail from './src/screens/MovieDetail';
import HomeStackNavigation from './src/navigations/HomeStackNavigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// export default function App(): JSX.Element {
//   return (
//     <NavigationContainer>
//       {/* <BottomTabNavigator /> */}
//       <HomeStackNavigation />
//     </NavigationContainer>
//   )
// }

const Stack = createNativeStackNavigator();

export default function App(): JSX.Element {
  return (
    <NavigationContainer>
      {/* <BottomTabNavigator /> */}
      <Stack.Navigator initialRouteName="Root">
        <Stack.Screen 
          name="Root" 
          component={Root}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="MovieDetail" component={MovieDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}




