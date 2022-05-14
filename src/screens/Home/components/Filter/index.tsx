import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import { Chip } from '../../../../components/Chip';
import { Container, Title } from './styles';

type FilterProps = {
  categories?: string[];
};

export function Filter({ categories }: FilterProps) {
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
        {categories?.map(category => (
          <Chip
            key={category}
            label={category}
            style={{
              marginRight: 20,
            }}
            onPress={() => {
              console.log('pressed');
            }}
          />
        ))}
      </ScrollView>
    </Container>
  );
}
