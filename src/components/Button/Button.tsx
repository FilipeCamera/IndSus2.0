import {Text} from 'components';
import React from 'react';

import {ButtonStyle, ButtonIcon} from './styles';

import GoogleIcon from 'assets/svg/google.svg';
import ShareIcon from 'assets/svg/telegram.svg';
interface ButtonProps {
  background: string;
  shadow?: number;
  title: string;
  size: number;
  weight: number;
  mode?: string;
  color: string;
  onPress: () => any;
  border?: boolean;
  google?: boolean;
  share?: boolean;
}

const Button = ({
  background,
  shadow,
  size,
  weight,
  color,
  title,
  mode,
  border,
  google,
  share,
  onPress,
}: ButtonProps) => {
  return (
    <ButtonStyle
      mode={mode}
      border={border}
      background={background}
      shadow={shadow}
      onPress={onPress}>
      {!!google && (
        <ButtonIcon>
          <GoogleIcon />
        </ButtonIcon>
      )}
      {!!share && (
        <ButtonIcon>
          <ShareIcon />
        </ButtonIcon>
      )}
      <Text title={title} size={size} weight={weight} color={color} />
    </ButtonStyle>
  );
};

export default Button;
