import React from 'react';
import { FlatList } from 'react-native-gesture-handler';

import { useCart } from '../../../../hooks/useCart';
import { Product } from '../../../../types/product';
import { formatPrice } from '../../../../utils/format';
import { generateBoxShadowStyle } from '../../../../utils/generateBoxShadow';
import {
  AddProductButton,
  AddProductButtonIcon,
  Container,
  ProductCategory,
  ProductContainer,
  ProductContent,
  ProductDescription,
  ProductFooter,
  ProductHeader,
  ProductImage,
  ProductName,
  ProductPrice,
  Title,
} from './styles';

type NewsProps = {
  products?: Product[];
};

export function News({ products }: NewsProps) {
  const { items, addToCart } = useCart();

  console.log(items);

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
    });
  };

  const renderRow = (product: Product) => (
    <ProductContainer>
      <ProductHeader
        style={{
          ...generateBoxShadowStyle(-1, 2, '#171717', 0.1, 3, 4, '#171717'),
        }}
      >
        <ProductImage resizeMode="contain" source={{ uri: product.image }} />
      </ProductHeader>
      <ProductContent>
        <ProductCategory>{product.category}</ProductCategory>
        <ProductName numberOfLines={1}>{product.title}</ProductName>
        <ProductDescription numberOfLines={2}>
          {product.description}
        </ProductDescription>
      </ProductContent>
      <ProductFooter>
        <ProductPrice>{formatPrice(product.price)}</ProductPrice>
        <AddProductButton
          onPress={() => {
            handleAddToCart(product);
          }}
        >
          <AddProductButtonIcon />
        </AddProductButton>
      </ProductFooter>
    </ProductContainer>
  );
  return (
    <Container>
      <Title>Novidades</Title>
      <FlatList<Product>
        keyExtractor={item => String(item.id)}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={products}
        renderItem={({ item }) => renderRow(item)}
        contentContainerStyle={{
          paddingHorizontal: 20,
        }}
      />
    </Container>
  );
}
