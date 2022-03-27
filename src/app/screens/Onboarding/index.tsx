import {Colors} from '@styles';
import {Button, Space, Text} from 'components';
import React, {useState} from 'react';

import LogoCampSearch from 'assets/svg/back_search.svg';
import {OnboardingStyle} from './styles';
import {View} from 'react-native';
import Step1 from './Step1';

const Onboarding = ({navigation}: any) => {
  const [state, setState] = useState('');

  if (state === 'step') {
    return <Step1 navigation={navigation} />;
  }
  return (
    <OnboardingStyle>
      <LogoCampSearch width="90%" />
      <Space vertical={15} />
      <Text
        title="Seja bem-vindo!"
        weight={600}
        size={20}
        color={Colors.textSecundaryBlack}
        center
      />
      <Space vertical={10} />
      <View style={{width: '90%'}}>
        <Text
          title="IndSus é um aplicativo totalmente gratuito que tem o intuito de facilitar as pesquisas em campo."
          weight={400}
          size={18}
          color={Colors.textSecundaryBlack}
          center
        />
      </View>
      <View style={{position: 'absolute', bottom: 25, right: 25}}>
        <Button
          title="Avançar"
          mode="text"
          size={16}
          weight={600}
          color={Colors.blue}
          onPress={() => setState('step')}
        />
      </View>
    </OnboardingStyle>
  );
};

export default Onboarding;
