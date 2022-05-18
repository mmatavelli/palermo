import React, { useMemo } from 'react';

import { useCart } from '../../../../hooks/useCart';
import { Badge, BadgeLabel, BagIcon, Container } from './styles';

type CartButtonProps = {
  onPress: () => void;
};

export function CartButton({ onPress }: CartButtonProps) {
  const { items } = useCart();

  const totalItemsInCart = useMemo(() => {
    return items.reduce((acc, item) => acc + item.quantity, 0);
  }, [items]);

  return (
    <Container onPress={onPress}>
      <BagIcon />
      {totalItemsInCart > 0 && (
        <Badge>
          <BadgeLabel>{totalItemsInCart}</BadgeLabel>
        </Badge>
      )}
    </Container>
  );
}
