import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import {Colors} from '@styles';

export const LinearBackStyle = styled(LinearGradient).attrs({
  colors: [Colors.linearStart, Colors.linearEnd],
  start: {x: 0, y: 0},
  end: {x: 0.5, y: 1},
})`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
