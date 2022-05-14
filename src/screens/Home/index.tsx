import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useQuery } from 'react-query';

import { Button } from '../../components/Button';
import { useCart } from '../../hooks/useCart';
import { listCategoryService } from '../../services/category';
import { listProductService } from '../../services/product';
import { RootStackParamList } from '../../types/routes';
import { Filter } from './components/Filter';
import { List } from './components/List';
import { News } from './components/News';
import {
  BagIcon,
  Container,
  Divider,
  FooterContainer,
  Header,
  HeaderTitle,
} from './styles';

export function Home() {
  const { top, bottom } = useSafeAreaInsets();

  const { navigate } =
    useNavigation<StackNavigationProp<RootStackParamList, 'Home'>>();

  const { items } = useCart();

  const categories = useQuery('categories', listCategoryService);

  const products = useQuery('products', listProductService);

  function handleNavigateToCart() {
    navigate('Cart');
  }

  return (
    <>
      <Container
        contentContainerStyle={{
          paddingTop: top,
          paddingBottom: bottom,
        }}
      >
        <Header>
          <HeaderTitle>Produtos</HeaderTitle>
          <BagIcon />
        </Header>
        <Filter categories={categories.data} />
        <News products={products.data?.slice(0, 5)} />
        <Divider />
        <List products={products.data?.slice(5)} />
      </Container>
      {items.length > 0 && (
        <FooterContainer>
          <Button onPress={handleNavigateToCart}>Ir para o carrinho</Button>
        </FooterContainer>
      )}
    </>
  );
}
