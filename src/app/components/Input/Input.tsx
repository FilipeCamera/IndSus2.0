import {Colors} from '@styles';
import React from 'react';
import {TextInput} from 'react-native-paper';

interface InputProps {
  value: string;
  label: string;
  onText: any;
  type: any;
  disabled: boolean;
  password: boolean;
}

const Input = ({
  label,
  value,
  onText,
  type,
  disabled,
  password,
}: InputProps) => {
  return (
    <TextInput
      label={label}
      value={value}
      mode={type}
      disabled={disabled}
      outlineColor={Colors.lightGray}
      placeholderTextColor={Colors.lightGray}
      secureTextEntry={password}
      style={{
        borderRadius: 8,
        fontFamily: 'Montserrat-Regular',
        fontSize: 16,
      }}
      onChangeText={e => onText(e)}
    />
  );
};

export default Input;
