import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 20px 20px;
  margin-bottom: 13px;
`;

export const HeaderTitle = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.WorkSansBold};
  color: #85868a;
  text-align: center;
`;

export const Title = styled.Text`
  font-size: ${RFValue(23)}px;
  font-family: ${({ theme }) => theme.fonts.WorkSansBold};
`;

export const CartItemContainer = styled.View`
  padding: 8px 16px;
  background-color: #ece9ff;
  flex-direction: row;
  margin-bottom: 16px;

  align-items: center;

  border-radius: ${({ theme }) => theme.shape.RADIUS}px;
`;

export const CartItemImageContainer = styled.View`
  width: 20%;
  margin-right: 8px;
`;

export const CartItemImage = styled.Image`
  height: 80px;
  border-radius: 10px;
`;

export const CartItemContent = styled.View`
  width: 60%;
`;

export const CartItemTitle = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.TEXT};
  font-family: ${({ theme }) => theme.fonts.WorkSansBold};
  margin-bottom: 4px;
`;

export const CartItemAmount = styled.Text`
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.PRIMARY};
  font-family: ${({ theme }) => theme.fonts.WorkSansBold};
`;

export const CartItemPrice = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.PRIMARY};
  font-family: ${({ theme }) => theme.fonts.WorkSansBold};
`;

export const CartItemActionsContainer = styled.View`
  width: 20%;
  height: 80px;
  align-items: center;
  background-color: red;
`;
