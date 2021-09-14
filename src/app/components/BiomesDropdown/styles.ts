import {Colors} from '@styles';
import styled from 'styled-components/native';

export const BiomesDropdownStyle = styled.TouchableOpacity`
  width: 150px;
  height: 150px;
  border-radius: 75px;
  align-items: center;
  justify-content: center;
  background: ${Colors.background};
  ${(props: any) =>
    props.error
      ? `border: 1px solid ${Colors.red}`
      : `border: 1px solid ${Colors.background}`}
  elevation: 4;
  align-self: center;
`;

export const ButtonBiome = styled.TouchableOpacity`
  width: 100%;
  height: 32px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 8px 0;
`;
