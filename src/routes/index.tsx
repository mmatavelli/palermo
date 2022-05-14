import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { Cart } from '../screens/Cart';
import { Confirmation } from '../screens/Confirmation';
import { Home } from '../screens/Home';
import { RootStackParamList } from '../types/routes';

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

export function Routes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="Cart" component={Cart} />
      <Screen name="Confirmation" component={Confirmation} />
    </Navigator>
  );
}
