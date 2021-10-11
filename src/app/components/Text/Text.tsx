import React from 'react';
import {TextStyle} from './styles';

interface TextProps {
  title?: string;
  size?: number;
  weight?: number;
  color?: string;
  center?: boolean;
  lines?: number;
}

const Text = ({title, lines, ...props}: TextProps) => {
  return (
    <TextStyle numberOfLines={lines} {...props}>
      {title}
    </TextStyle>
  );
};

export default Text;
