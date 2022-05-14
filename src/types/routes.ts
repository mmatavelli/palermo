import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
  Cart: undefined;
  Confirmation: undefined;
};

export type RootStackNavProps = StackNavigationProp<RootStackParamList, 'Home'>;
