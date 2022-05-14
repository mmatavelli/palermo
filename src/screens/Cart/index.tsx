import React, { useCallback } from 'react';
import { Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { CartItem } from '../../contexts/Cart';
import { useCart } from '../../hooks/useCart';
import { formatPrice } from '../../utils/format';
import {
  CartItemImageContainer,
  CartItemContainer,
  CartItemContent,
  CartItemImage,
  Container,
  Header,
  HeaderTitle,
  CartItemTitle,
  CartItemAmount,
  CartItemPrice,
  Title,
  CartItemActionsContainer,
} from './styles';

export function Cart() {
  const { top } = useSafeAreaInsets();

  const { items } = useCart();

  const renderRow = useCallback((item: CartItem) => {
    return (
      <CartItemContainer>
        <CartItemImageContainer>
          <CartItemImage resizeMode="contain" source={{ uri: item.image }} />
        </CartItemImageContainer>
        <CartItemContent>
          <CartItemTitle numberOfLines={1}>{item.title}</CartItemTitle>
          <CartItemAmount>
            {item.quantity}x{' '}
            <CartItemPrice>{formatPrice(item.price)}</CartItemPrice>
          </CartItemAmount>
        </CartItemContent>
        <CartItemActionsContainer />
      </CartItemContainer>
    );
  }, []);

  return (
    <Container style={{ paddingTop: top }}>
      <Header>
        <HeaderTitle>Carrinho</HeaderTitle>
      </Header>
      <FlatList<CartItem>
        keyExtractor={item => String(item.id)}
        data={items}
        renderItem={({ item }) => renderRow(item)}
        contentContainerStyle={{ paddingHorizontal: 20 }}
        ListHeaderComponent={<Title>Meu Carrinho</Title>}
        ListHeaderComponentStyle={{
          marginBottom: 32,
        }}
      />
    </Container>
  );
}
