import { Colors } from '@styles';
import React, { useState } from 'react';
import { TextInput } from 'react-native';

interface InputNotaProps {
  setDataForm: any;
  dataForm: any;
  item: any;
  itemDta: any;
  itemCr: any;
  cri: any;
}

const InputNota = ({setDataForm, item, itemDta, itemCr, dataForm}: InputNotaProps) => {
  const [value, setValue] = useState('');

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
        }
      }}
    />
  )
}

export default InputNota