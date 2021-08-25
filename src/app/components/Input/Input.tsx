import {Colors} from '@styles';
import {Text, Space} from 'components';
import React from 'react';
import {TextInput} from 'react-native-paper';
import {RFValue} from 'react-native-responsive-fontsize';

interface InputProps {
  value: string;
  label: string;
  onText: any;
  type: any;
  keyType: string | any;
  disabled: boolean;
  password: boolean;
  error: string;
}

const Input = ({
  label,
  value,
  onText,
  type,
  disabled,
  keyType,
  password,
  error,
}: InputProps) => {
  return (
    <>
      <TextInput
        label={label}
        value={value}
        mode={type}
        disabled={disabled}
        keyboardType={keyType}
        outlineColor={Colors.lightGray}
        placeholderTextColor={Colors.lightGray}
        secureTextEntry={password}
        error={error ? true : false}
        style={{
          borderRadius: 8,
          fontFamily: 'Montserrat-Regular',
          fontSize: RFValue(16),
        }}
        autoCapitalize="none"
        onChangeText={e => onText(e)}
      />
      {!!error && (
        <>
          <Space vertical={2} />
          <Text title={error} color={Colors.red} size={14} weight={500} />
        </>
      )}
    </>
  );
};

export default Input;
