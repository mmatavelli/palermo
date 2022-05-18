import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import { generateBoxShadowStyle } from '../../utils/generateBoxShadow';

export const Container = styled.ScrollView`
  padding-bottom: 140px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px;
  margin-bottom: 13px;
`;

export const HeaderTitle = styled.Text`
  font-size: ${RFValue(23)}px;
  font-family: ${({ theme }) => theme.fonts.WorkSansBold};
`;

export const Divider = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.DIVIDER};
  margin: 32px 0;
`;

export const FooterContainer = styled.View.attrs({
  style: generateBoxShadowStyle(-1, 2, '#171717', 0.1, 3, 4, '#171717'),
})`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 120px;
  padding: 0 32px;

  justify-content: center;
  align-items: center;

  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.SURFACE};
`;
