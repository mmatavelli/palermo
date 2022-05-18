import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import { Button } from '../../components/Button';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #8775fe;
  padding: 0 16px;
`;

export const Circle = styled.View`
  width: 150px;
  height: 150px;
  border-radius: 75px;
  border: 8px solid #fff;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
`;

export const SuccessIcon = styled.Image.attrs({
  source: require('../../assets/icons/SUCCESS_1.png'),
})`
  resize-mode: contain;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.WorkSansBold};
  color: #fff;
  font-size: ${RFValue(18)}px;
  margin-bottom: 16px;
`;

export const Message = styled.Text`
  font-family: ${({ theme }) => theme.fonts.WorkSansRegular};
  color: #fff;
  font-size: ${RFValue(16)}px;
  text-align: center;
`;

export const ProceedButton = styled(Button)`
  background-color: rgba(80, 77, 182, 1);
  position: absolute;
  bottom: 48px;
`;
