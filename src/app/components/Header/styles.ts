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
  padding: 8px;
  width: 100%;
`;

export const HeaderCommonButton = styled.TouchableOpacity`
  position: absolute;
  ${(props: any) => (props.back ? 'left: 0' : '')};
  ${(props: any) => (props.alert ? 'right: 0' : '')};
  padding: 8px;
`;

export const HeaderButton = styled.TouchableOpacity``;
