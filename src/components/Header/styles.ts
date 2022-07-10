import {Colors} from '@styles';
import styled from 'styled-components/native';

export const HeaderStyle = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const HeaderCommonStyle = styled.View`
  align-items: center;
  justify-content: center;
  padding: 16px;
  background: ${Colors.background};
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-color: ${Colors.backgroundLight};
`;

export const HeaderCommonButton = styled.TouchableOpacity`
  position: absolute;
  ${(props: any) => (props.back ? 'left: 20px' : '')};
  ${(props: any) => (props.alert ? 'right: 20px' : '')};
  /* padding: 8px; */
`;

export const HeaderButton = styled.TouchableOpacity``;
