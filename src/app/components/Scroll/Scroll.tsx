import {Colors} from '@styles';
import React from 'react';
import {ScrollView} from 'react-native';

const Scroll = ({children, initial, noPadding}: any) => {
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        paddingVertical: initial ? 24 : 16,
        paddingHorizontal: initial || noPadding ? 0 : 16,
        alignItems: 'center',
        justifyContent: initial ? 'center' : 'flex-start',
      }}
      style={{
        flex: 1,
        width: '100%',
        backgroundColor: initial ? 'transparent' : Colors.background,
      }}
      showsVerticalScrollIndicator={false}>
      {children}
    </ScrollView>
  );
};

export default Scroll;
