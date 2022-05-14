import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import { widthPercentageToDP } from '../../../../utils/dimensions';

export const Container = styled.View``;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.WorkSansBold};
  color: ${({ theme }) => theme.colors.TEXT};
  font-size: ${RFValue(23)}px;
  padding: 0 20px;
  margin-bottom: 32px;
`;

export const ProductContainer = styled.View`
  width: ${widthPercentageToDP('50%')}px;
  margin-right: 64px;
`;

export const ProductHeader = styled.View`
  background-color: ${({ theme }) => theme.colors.SURFACE};
  border-radius: ${({ theme }) => theme.shape.RADIUS}px;
  padding: 8px;
`;

export const ProductContent = styled.View`
  padding: 8px 0;
`;

export const ProductFooter = styled.View`
  padding: 16px 0;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ProductImage = styled.Image`
  height: 225px;
`;

export const ProductCategory = styled.Text`
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.PRIMARY};
  font-family: ${({ theme }) => theme.fonts.WorkSansBold};
  margin-bottom: 4px;
`;

export const ProductName = styled.Text`
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.TEXT};
  font-family: ${({ theme }) => theme.fonts.WorkSansBold};
  margin-bottom: 4px;
`;

export const ProductDescription = styled.Text`
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.TEXT_SECONDARY};
  font-family: ${({ theme }) => theme.fonts.WorkSansRegular};
`;

export const ProductPrice = styled.Text`
  color: ${({ theme }) => theme.colors.PRIMARY};
  font-family: ${({ theme }) => theme.fonts.WorkSansBold};
  font-size: ${RFValue(20)}px;
`;

export const AddProductButton = styled.TouchableOpacity`
  height: 40px;
  width: 40px;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.PRIMARY};
  justify-content: center;
  align-items: center;
`;

export const AddProductButtonIcon = styled.Image.attrs({
  source: require('../../../../assets/icons/ADD_2.png'),
})`
  height: 15px;
  width: 15px;
  tint-color: ${({ theme }) => theme.colors.PRIMARY};
`;
