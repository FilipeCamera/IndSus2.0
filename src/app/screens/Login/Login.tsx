import {Colors} from '@styles';
import {
  Button,
  Card,
  Input,
  LinearBackground,
  Scroll,
  Space,
  Text,
} from 'components';
import React from 'react';
import {View} from 'react-native';

import Line from 'assets/svg/line.svg';

const Login = ({navigation}: any) => {
  return (
    <LinearBackground>
      <Scroll>
        <Card>
          <Space vertical={8} />
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <Text
              title="IndSus"
              size={18}
              weight={700}
              color={Colors.textMediumBlack}
            />
            <Text
              title="Indicador de Sustentabilidade"
              size={16}
              weight={500}
              color={Colors.textMediumBlack}
            />
          </View>
          <Space vertical={25} />
          <Input label="E-mail" type="outlined" />
          <Space vertical={4} />
          <Input label="Senha" type="outlined" />
          <Space vertical={4} />
          <View style={{alignItems: 'flex-start'}}>
            <Button
              title="Esqueceu a senha?"
              mode="text"
              size={14}
              weight={600}
              color={Colors.blue}
            />
          </View>
          <Space vertical={25} />
          <Button
            background={Colors.blue}
            weight={600}
            size={15}
            color={Colors.background}
            title="Acessar"
            shadow={4}
          />
          <Space vertical={12} />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              title="Não possui uma conta?"
              size={15}
              weight={400}
              color={Colors.secundaryTextGray}
            />
            <Space horizontal={2} />
            <Button
              mode="text"
              title="Cadastre-se"
              size={15}
              weight={600}
              color={Colors.blue}
              onPress={() => navigation.navigate('Register')}
            />
          </View>
          <Space vertical={12} />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <Line width="40%" />
            <Text
              title="ou"
              weight={600}
              size={16}
              color={Colors.textSecundaryBlack}
            />
            <Line width="40%" />
          </View>
          <Space vertical={12} />
          <Button
            title="Sign in with Google"
            color={Colors.textBlack}
            weight={500}
            size={15}
            background={Colors.background}
            border
            google
          />
          <Space vertical={4} />
        </Card>
      </Scroll>
    </LinearBackground>
  );
};

export default Login;
