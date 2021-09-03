import {Colors} from '@styles';
import {Header, Scroll, Text} from 'components';
import React, {useState} from 'react';
import {View} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const ProfileResearches = ({setState}: any) => {
  const [researches, setResearches] = useState([]);
  return (
    <Scroll>
      <Header
        title="Pesquisas Recebidas"
        mode="common"
        alert
        back
        onBack={() => setState('')}
      />
      {researches.length === 0 && (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Icon name="alert" size={64} color={Colors.lightGray} />
          <Text
            title="Nenhuma pesquisa recebida"
            size={18}
            weight={500}
            color={Colors.lightGray}
          />
        </View>
      )}
    </Scroll>
  );
};

export default ProfileResearches;
