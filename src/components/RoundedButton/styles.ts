import {Colors} from '@styles';
import styled from 'styled-components/native';

export const RoundedButtonStyle = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  justify-content: center;
  background: ${Colors.blue};
  width: 60px;
  height: 60px;
  border-radius: 30px;
  elevation: 6;
  position: absolute;
  bottom: 15px;
  right: 15px;
`;
