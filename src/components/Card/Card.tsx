import React from 'react';
import {CardStyle} from './styles';

const Card = ({children, ...props}: any) => {
  return <CardStyle {...props}>{children}</CardStyle>;
};

export default Card;
