import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Label } from './styles';

export type ChipProps = TouchableOpacityProps & {
  label?: string;
  checked?: boolean;
};

export type LabelProps = {
  checked?: boolean;
};

export function Chip({ label, checked, style, onPress }: ChipProps) {
  return (
    <Container checked={checked} style={style} onPress={onPress}>
      <Label checked={checked}>{label}</Label>
    </Container>
  );
}
