import {Colors} from '@styles';
import styled from 'styled-components/native';

export const UploadImageContainer = styled.TouchableOpacity`
  width: 150px;
  height: 150px;
  border-radius: 75px;
  align-items: center;
  justify-content: center;
  padding: 4px;
  background: ${Colors.background};
  ${(props: any) =>
    props.error
      ? `border: 1px solid ${Colors.red}`
      : `border: 1px solid ${Colors.background}`}
  elevation: 4;
`;

export const ImageBox = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 999px;
`;
