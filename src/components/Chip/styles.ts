import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

import { ChipProps, LabelProps } from '.';

export const Container = styled.TouchableOpacity<ChipProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 14px;

  border: 1px solid #d1c9ff;
  border-radius: 13px;

  ${props =>
    props.checked &&
    css`
      background-color: ${props.theme.colors.PRIMARY};
    `}
`;

export const Label = styled.Text<LabelProps>`
  color: #b4b4b6;
  font-family: ${({ theme }) => theme.fonts.WorkSansBold};
  font-size: ${RFValue(13)};

  ${props =>
    props.checked &&
    css`
      color: ${props.theme.colors.WHITE};
    `}
`;
