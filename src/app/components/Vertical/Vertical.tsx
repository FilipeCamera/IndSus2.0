import React from 'react';
import {View} from 'react-native';

const Vertical = ({children}: any) => {
  return <View style={{flexDirection: 'column'}}>{children}</View>;
};

export default Vertical;
