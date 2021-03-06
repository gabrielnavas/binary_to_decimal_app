// eslint-disable-next-line no-use-before-define
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import BinDecListScreen from './src/screens/BinDec/list'
import BinDecNewOrEditScreen from './src/screens/BinDec/new-or-edit-item'
import theme from './src/styles/theme'

const Stack = createStackNavigator()

export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            title: 'Binary to Decimal',
            headerTitleAlign: 'center',
            headerTintColor: theme.colors.white,
            headerStyle: {
              backgroundColor: theme.colors.blueDark
            }
          }}
          name="BinDecListScreen"
          component={BinDecListScreen}
        />
         <Stack.Screen
          options={{
            title: 'Input de binary',
            headerTitleAlign: 'center',
            headerTintColor: theme.colors.white,
            headerStyle: {
              backgroundColor: theme.colors.blueDark
            }
          }}
          name="BinDecNewOrEditScreen"
          component={BinDecNewOrEditScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
