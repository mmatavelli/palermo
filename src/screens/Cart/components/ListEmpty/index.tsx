import React from 'react';

import { Button } from '../../../../components/Button';
import { BagIcon, Container, EmptyMessage } from './styles';

type ListEmptyProps = {
  onPress: () => void;
};

export function ListEmpty({ onPress }: ListEmptyProps) {
  return (
    <Container>
      <BagIcon />
      <EmptyMessage>Nenhum item adicionado no carrinho.</EmptyMessage>
      <Button onPress={onPress}>ADICIONAR ITENS</Button>
    </Container>
  );
}
