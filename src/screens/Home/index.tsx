import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useCallback, useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useQuery } from 'react-query';

import { Button } from '../../components/Button';
import { useCart } from '../../hooks/useCart';
import { listCategoryService } from '../../services/category';
import {
  listProductByCategoryService,
  listProductService,
} from '../../services/product';
import { RootStackParamList } from '../../types/routes';
import { CartButton } from './components/CartButton';
import { Filter } from './components/Filter';
import { List } from './components/List';
import { News } from './components/News';
import {
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

  const [selectedCategory, setSelectedCategory] = useState('last');

  const categories = useQuery('categories', listCategoryService);

  const products = useQuery(['products', selectedCategory], async () => {
    if (selectedCategory === 'last') {
      return listProductService();
    }

    return listProductByCategoryService(selectedCategory);
  });

  function handleNavigateToCart() {
    navigate('Cart');
  }

  const handleCategoryChange = useCallback((category: string) => {
    setSelectedCategory(category);
  }, []);

  return (
    <>
      <Container
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: top,
          paddingBottom: bottom + 120,
        }}
      >
        <Header>
          <HeaderTitle>Produtos</HeaderTitle>
          <CartButton onPress={handleNavigateToCart} />
        </Header>
        <Filter
          selectedCategory={selectedCategory}
          categories={categories.data}
          onCategoryChange={handleCategoryChange}
        />
        <News products={products.data?.slice(0, 5)} />
        <Divider />
        <List products={products.data} />
      </Container>
      {items.length > 0 && (
        <FooterContainer>
          <Button onPress={handleNavigateToCart}>Ir para o carrinho</Button>
        </FooterContainer>
      )}
    </>
  );
}
