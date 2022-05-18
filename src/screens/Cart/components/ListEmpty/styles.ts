import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 32px;
`;

export const BagIcon = styled.Image.attrs({
  source: require('../../../../assets/icons/BAG_2.png'),
})`
  resize-mode: contain;
  tint-color: ${({ theme }) => theme.colors.TEXT_SECONDARY};
  margin-bottom: 16px;
`;

export const EmptyMessage = styled.Text`
  font-size: 16px;
  text-align: center;
  color: ${({ theme }) => theme.colors.TEXT_SECONDARY};
  font-family: ${({ theme }) => theme.fonts.WorkSansBold};
  margin-bottom: 16px;
`;
