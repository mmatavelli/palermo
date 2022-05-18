import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
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
  justify-content: space-between;
  margin-bottom: 16px;
  align-items: center;
  border-radius: ${({ theme }) => theme.shape.RADIUS}px;
`;

export const CartItemImageContainer = styled.View`
  width: 20%;
`;

export const CartItemImage = styled.Image`
  height: 80px;
  border-radius: 10px;
`;

export const CartItemContent = styled.View`
  width: 50%;
  padding: 0 4px;
`;

export const CartItemTitle = styled.Text`
  font-size: ${RFValue(13)}px;
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
  width: 25%;
  align-items: center;
  justify-content: flex-end;
`;

export const ButtonGroup = styled.View`
  flex-direction: row;
  border: 1px solid ${({ theme }) => theme.colors.TEXT_SECONDARY};
  border-radius: 25px;
`;

export const ButtonDivider = styled.View`
  width: 1px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.TEXT_SECONDARY};
`;

export const CartItemButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
`;

export const AddIcon = styled.Image.attrs({
  source: require('../../assets/icons/ADD_2.png'),
})`
  tint-color: ${({ theme }) => theme.colors.TEXT_SECONDARY};
  height: 12px;
  width: 12px;
`;

export const ReduceIcon = styled.Image.attrs({
  source: require('../../assets/icons/REDUCE_2.png'),
})`
  tint-color: ${({ theme }) => theme.colors.TEXT_SECONDARY};
  height: 12px;
  width: 12px;
`;

export const FooterContainer = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  border-top-width: 1px;
  border-top-color: #ebebed;
  background-color: ${({ theme }) => theme.colors.BACKGROUND};
`;

export const FooterHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-color: #ebebed;
  padding: 16px;
`;

export const TotalText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.WorkSansBold};
  font-size: ${RFValue(14)}px;
`;

export const FooterContent = styled.View`
  padding: 32px;
`;
