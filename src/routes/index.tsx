import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import { useTheme } from 'styled-components/native';

import { Cart } from '../screens/Cart';
import { Confirmation } from '../screens/Confirmation';
import { Home } from '../screens/Home';
import { RootStackParamList } from '../types/routes';

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

export function Routes() {
  const theme = useTheme();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen
        name="Cart"
        component={Cart}
        options={{
          title: 'Carrinho',
          headerBackTitleVisible: false,
          headerBackImage: () => (
            <Feather name="chevron-left" size={32} color="#85868A" />
          ),
          headerShown: true,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: '#85868A',
            textTransform: 'uppercase',
          },
          headerStyle: {
            backgroundColor: theme.colors.BACKGROUND,
            borderBottomColor: 'transparent',
            shadowRadius: 0,
            shadowOffset: {
              height: 0,
              width: 0,
            },
            elevation: 0,
          },
        }}
      />
      <Screen name="Confirmation" component={Confirmation} />
    </Navigator>
  );
}
