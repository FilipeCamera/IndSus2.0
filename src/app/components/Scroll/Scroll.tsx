import React from 'react';
import {ScrollView} from 'react-native';

const Scroll = ({children}: any) => {
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        paddingVertical: 24,
        alignItems: 'center',
      }}
      style={{flex: 1, width: '100%'}}
      showsVerticalScrollIndicator={false}>
      {children}
    </ScrollView>
  );
};

export default Scroll;
