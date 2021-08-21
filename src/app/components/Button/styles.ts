import {Colors} from '@styles';
import styled from 'styled-components/native';

interface ButtonProps {
  background: string;
  shadow: number;
  mode: string;
  border: boolean;
}

export const ButtonStyle = styled.TouchableOpacity<ButtonProps>`
  background: ${props =>
    props.mode === 'text'
      ? Colors.background
      : props.background
      ? props.background
      : Colors.blue};
  elevation: ${props => (props.shadow ? props.shadow : 0)};
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  padding: ${props => (props.mode === 'text' ? '0px' : '16px')};
  ${props => (props.border ? `border: 1px solid ${Colors.lightGray}` : '')}
`;
