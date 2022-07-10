import React from 'react';

import {TextInput, View} from 'react-native';
import SearchIcon from 'assets/svg/searchBlue.svg';
import {Colors} from '@styles';
import {Space} from '../Space';
interface SearchProps {
  value: string;
  onText: (e: string) => any;
}

const Search = ({value, onText}: SearchProps) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.lightBlue,
        paddingVertical: 2,
        paddingHorizontal: 16,
        borderRadius: 8,
      }}>
      <SearchIcon width="15px" height="15px" />
      <Space horizontal={2} />
      <TextInput
        value={value}
        onChangeText={e => onText(e)}
        style={{
          flex: 1,
          fontFamily: 'Montserrat-Medium',
          color: Colors.secundaryText2,
          fontWeight: '500',
        }}
        placeholder="Pesquisar"
        placeholderTextColor={Colors.secundaryText2}
      />
    </View>
  );
};

export {Search};
