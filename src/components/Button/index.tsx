import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, Title } from './styles';

export type ButtonProps = RectButtonProps;

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <Container {...rest}>
      <Title>{children}</Title>
    </Container>
  );
}
