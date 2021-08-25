import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

const family = {
  100: 'Montserrat-Thin',
  200: 'Montserrat-ExtraLight',
  300: 'Montserrat-Light',
  400: 'Montserrat-Regular',
  500: 'Montserrat-Medium',
  600: 'Montserrat-SemiBold',
  700: 'Montserrat-Bold',
  800: 'Montserrat-ExtraBold',
  900: 'Montserrat-Black',
};

interface TextProps {
  size: number;
  weight: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  color: string;
  center: boolean;
}

export const TextStyle = styled.Text<TextProps>`
  font-size: ${(props: any) =>
    `${RFValue(props.size)}px` || `${RFValue(14)}px`};
  font-family: ${(props: TextProps) => family[props.weight || 400]};
  color: ${(props: any) => props.color || '#000'};
  ${(props: any) => (props.center ? 'text-align: center' : '')};
`;
