import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled(RectButton)`
  width: 100%;
  height: 49px;
  border-radius: 24.5px;
  justify-content: center;
  align-items: center;
  background-color: #504db6;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.WorkSansBold};
  color: ${({ theme }) => theme.colors.WHITE};
  font-size: 18px;
  text-transform: uppercase;
`;
