import { Colors } from '@styles';
import React, { useState } from 'react';
import { TextInput } from 'react-native';

interface InputNotaProps {
  onText: (e: any) => any
  valor: any
}

const InputNota = ({onText, valor}: InputNotaProps) => {
  const [value, setValue] = useState(valor);

  return (
    <TextInput
      value={value}
      style={{
        borderRadius: 8,
        borderWidth: 1,
        borderStyle: 'dashed',
        width: 80,
        height: 42,
        textAlign: 'center',
        fontFamily: 'Montserrat-Bold',
        fontSize: 16,
        color: Colors.textSecundaryBlack,
      }}
      onChangeText={(e: any) => {
        if(e > 10) {
          setValue('')
        }
        else if(e < 0) {
          setValue('')
        }else {
          setValue(e)
          onText(e)
        }
      }}
    />
  )
}

export default InputNota