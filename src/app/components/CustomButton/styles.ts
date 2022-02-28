import {Colors} from '@styles';
import styled from 'styled-components/native';

export const CustomButtonStyle = styled.View`
  flex-direction: column;
  width: 100%;
`;

export const ButtonStyle = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 5px 8px;
`;

export const Alert = styled.View`
  width: 12px;
  height: 12px;
  border-radius: 12px;
  background: ${Colors.red};
  position: absolute;
  top: 5px;
  right: 5px;
`;
