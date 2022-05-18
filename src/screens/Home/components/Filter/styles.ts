import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  margin-bottom: 32px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.WorkSansBold};
  color: #6f6f6f;
  font-size: ${RFValue(12)}px;
  text-transform: uppercase;
  padding: 0 20px;
  margin-bottom: 16px;
`;
