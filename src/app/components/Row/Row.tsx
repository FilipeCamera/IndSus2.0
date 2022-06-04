import React from 'react';
import {RowStyle} from './styles';

interface RowProps {
  children: any;
  noMarginBottom?: boolean;
  noMargin?: boolean;
}

const Row = ({children, ...props}: RowProps) => {
  return <RowStyle {...props}>{children}</RowStyle>;
};

export default Row;
