import React from 'react';
import {View} from 'react-native';

interface SpaceProps {
  vertical?: number;
  horizontal?: number;
}

const Space = ({vertical, horizontal}: SpaceProps) => {
  return (
    <View style={{marginVertical: vertical, marginHorizontal: horizontal}} />
  );
};

export default Space;
