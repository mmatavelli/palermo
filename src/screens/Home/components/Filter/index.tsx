import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import { Chip } from '../../../../components/Chip';
import { Container, Title } from './styles';

type FilterProps = {
  selectedCategory: string;
  categories?: string[];
  onCategoryChange: (category: string) => void;
};

export function Filter({
  selectedCategory,
  categories,
  onCategoryChange,
}: FilterProps) {
  return (
    <Container>
      <Title>Filtrar categoria</Title>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 20,
        }}
      >
        <Chip
          label="Últimos"
          checked={selectedCategory === 'last'}
          style={{
            marginRight: 20,
          }}
          onPress={() => {
            onCategoryChange('last');
          }}
        />
        {categories?.map(category => (
          <Chip
            key={category}
            label={category}
            checked={selectedCategory === category}
            style={{
              marginRight: 20,
            }}
            onPress={() => {
              onCategoryChange(category);
            }}
          />
        ))}
      </ScrollView>
    </Container>
  );
}
