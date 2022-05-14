import React from 'react';
import { FlatList } from 'react-native';

import { Product } from '../../../../types/product';
import { formatPrice } from '../../../../utils/format';
import { generateBoxShadowStyle } from '../../../../utils/generateBoxShadow';
import {
  AddProductButton,
  AddProductButtonIcon,
  Container,
  Content,
  ProductCategory,
  ProductContainer,
  ProductContent,
  ProductHeader,
  ProductImage,
  ProductName,
  ProductPrice,
  Title,
} from './styles';

type ListProps = {
  products?: Product[];
};

export function List({ products }: ListProps) {
  return (
    <Container>
      <Title>Listagem</Title>
      <Content>
        {products?.map(product => (
          <ProductContainer key={`home-list-${product.id}`}>
            <ProductHeader
              style={{
                ...generateBoxShadowStyle(
                  -1,
                  2,
                  '#171717',
                  0.1,
                  3,
                  4,
                  '#171717',
                ),
              }}
            >
              <ProductImage
                resizeMode="contain"
                source={{ uri: product.image }}
              />
              <AddProductButton>
                <AddProductButtonIcon />
              </AddProductButton>
            </ProductHeader>
            <ProductContent>
              <ProductCategory>{product.category}</ProductCategory>
              <ProductName numberOfLines={1}>{product.title}</ProductName>
              <ProductPrice>{formatPrice(product.price)}</ProductPrice>
            </ProductContent>
          </ProductContainer>
        ))}
      </Content>
    </Container>
  );
}
