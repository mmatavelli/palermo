import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { StatusBar } from 'react-native';

import { RootStackParamList } from '../../types/routes';
import { generateBoxShadowStyle } from '../../utils/generateBoxShadow';
import {
  Circle,
  Container,
  Message,
  ProceedButton,
  SuccessIcon,
  Title,
} from './styles';

export function Confirmation() {
  const { navigate } =
    useNavigation<StackNavigationProp<RootStackParamList, 'Confirmation'>>();

  function handleNavigateToHome() {
    navigate('Home');
  }

  return (
    <>
      <StatusBar barStyle="light-content" translucent />
      <Container>
        <Circle>
          <SuccessIcon />
        </Circle>
        <Title>SUCESSO!</Title>
        <Message>Compra realizada com sucesso, aproveite!</Message>
        <ProceedButton
          onPress={handleNavigateToHome}
          style={{
            ...generateBoxShadowStyle(-1, 6, '#ffffff', 0.1, 3, 4, '#ffffff'),
          }}
        >
          Prosseguir
        </ProceedButton>
      </Container>
    </>
  );
}
