import styled from 'styled-components/native';

export const Container = styled.Pressable``;

export const Badge = styled.View`
  position: absolute;
  top: -8px;
  right: -12px;
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.PRIMARY};
  background-color: ${({ theme }) => theme.colors.SURFACE};
`;

export const BadgeLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.WorkSansBold};
  color: ${({ theme }) => theme.colors.PRIMARY};
`;

export const BagIcon = styled.Image.attrs({
  source: require('../../../../assets/icons/BAG_1.png'),
})`
  tint-color: ${({ theme }) => theme.colors.PRIMARY};
`;
