import {Colors} from '@styles';
import styled from 'styled-components/native';

interface AvatarProps {
  error: boolean;
}

export const AvatarStyle = styled.TouchableOpacity<AvatarProps>`
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
