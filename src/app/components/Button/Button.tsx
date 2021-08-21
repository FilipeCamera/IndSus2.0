import {Text} from 'components';
import React from 'react';

import {ButtonStyle} from './styles';

interface ButtonProps {
  background: string;
  shadow: number;
  title: string;
  size: number;
  weight: number;
  mode: string;
  color: string;
  onPress: () => any;
  border: boolean;
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
  onPress,
}: ButtonProps) => {
  return (
    <ButtonStyle
      mode={mode}
      border={border}
      background={background}
      shadow={shadow}
      onPress={onPress}>
      <Text title={title} size={size} weight={weight} color={color} />
    </ButtonStyle>
  );
};

export default Button;
