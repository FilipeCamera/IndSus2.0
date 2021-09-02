import {Colors} from '@styles';
import {Header, Scroll, Text} from 'components';
import React from 'react';
import {View} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const Researches = () => {
  return (
    <Scroll>
      <Header mode="avatar" />
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Icon name="alert" size={64} color={Colors.lightGray} />
        <Text
          title="Nenhuma pesquisa encontrada"
          size={18}
          weight={500}
          color={Colors.lightGray}
        />
      </View>
    </Scroll>
  );
};

export default Researches;
