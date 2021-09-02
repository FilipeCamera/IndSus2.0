import React from 'react';
import {RoundedButtonStyle} from './styles';

const RoundedButton = ({children, onPress}: any) => {
  return <RoundedButtonStyle onPress={onPress}>{children}</RoundedButtonStyle>;
};

export default RoundedButton;
