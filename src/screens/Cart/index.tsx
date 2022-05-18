import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useCallback, useMemo } from 'react';
import { Alert } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Button } from '../../components/Button';
import { CartItem } from '../../contexts/Cart';
import { useCart } from '../../hooks/useCart';
import { RootStackParamList } from '../../types/routes';
import { formatPrice } from '../../utils/format';
import { ListEmpty } from './components/ListEmpty';
import {
  AddIcon,
  ButtonDivider,
  ButtonGroup,
  CartItemActionsContainer,
  CartItemAmount,
  CartItemButton,
  CartItemContainer,
  CartItemContent,
  CartItemImage,
  CartItemImageContainer,
  CartItemPrice,
  CartItemTitle,
  FooterContainer,
  FooterContent,
  FooterHeader,
  ReduceIcon,
  Title,
  TotalText,
} from './styles';

export function Cart() {
  const { top, bottom } = useSafeAreaInsets();

  const { goBack, navigate } =
    useNavigation<StackNavigationProp<RootStackParamList, 'Cart'>>();

  const { items, updateAmount, removeFromCart, clearCart } = useCart();

  const total = useMemo(() => {
    return items.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
  }, [items]);

  function handleNavigateToConfirmation() {
    navigate('Confirmation');
    clearCart();
  }

  const handleUpdateAmount = useCallback(
    (productId: number, amount: number) => {
      if (amount <= 0) {
        Alert.alert(
          'Remover Item',
          'Se deseja remover o item do carrinho clique em prosseguir.',
          [
            {
              text: 'Cancelar',
              style: 'destructive',
            },
            {
              text: 'Prosseguir',
              style: 'default',
              onPress: () => {
                removeFromCart(productId);
              },
            },
          ],
        );
      } else {
        updateAmount(productId, amount);
      }
    },
    [removeFromCart, updateAmount],
  );

  const renderRow = useCallback(
    (item: CartItem) => {
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
          <CartItemActionsContainer>
            <ButtonGroup>
              <CartItemButton
                onPress={() => {
                  handleUpdateAmount(item.id, item.quantity - 1);
                }}
              >
                <ReduceIcon />
              </CartItemButton>
              <ButtonDivider />
              <CartItemButton
                onPress={() => {
                  handleUpdateAmount(item.id, item.quantity + 1);
                }}
              >
                <AddIcon />
              </CartItemButton>
            </ButtonGroup>
          </CartItemActionsContainer>
        </CartItemContainer>
      );
    },
    [handleUpdateAmount],
  );

  if (items.length === 0) {
    return <ListEmpty onPress={goBack} />;
  }

  return (
    <>
      <FlatList<CartItem>
        keyExtractor={item => String(item.id)}
        data={items}
        ListEmptyComponent={ListEmpty}
        renderItem={({ item }) => renderRow(item)}
        ListHeaderComponent={<Title>Meu Carrinho</Title>}
        contentContainerStyle={{ paddingHorizontal: 16 }}
        ListHeaderComponentStyle={{
          marginTop: 16,
          marginBottom: 32,
        }}
      />
      <FooterContainer>
        <FooterHeader>
          <TotalText>Total:</TotalText>
          <TotalText>{formatPrice(total)}</TotalText>
        </FooterHeader>
        <FooterContent style={{ paddingBottom: bottom }}>
          <Button onPress={handleNavigateToConfirmation}>
            Finalizar compra
          </Button>
        </FooterContent>
      </FooterContainer>
    </>
  );
}
