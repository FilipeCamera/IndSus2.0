import {Colors} from '@styles';
import styled from 'styled-components/native';

export const DateTimeContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const DateTimeInContainer = styled.View`
  border: 1px solid ${Colors.lightGray};
  border-radius: 8px;
  height: 56px;
  width: 200px;
  justify-content: center;
  align-items: center;
`;

export const DateTimeButton = styled.TouchableOpacity`
  width: 48px;
  height: 48px;
  align-items: center;
  justify-content: center;
  background: ${Colors.blue};
  border-radius: 24px;
`;
