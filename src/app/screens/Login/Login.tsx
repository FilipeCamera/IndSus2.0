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
import React, {useState} from 'react';
import {View} from 'react-native';

import Line from 'assets/svg/line.svg';
import {emailValidate, fieldPass} from 'validation';
import {auth, firestore} from 'firebase';
import {userPersist} from 'functions';
import {showMessage} from 'react-native-flash-message';

const Login = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [errors, setErrors] = useState({email: '', pass: ''});

  const verify = () => {
    const emailValidated = emailValidate(email);
    const passValidated = fieldPass(pass, 6);

    setErrors({
      ...errors,
      email: emailValidated.error,
      pass: passValidated.error,
    });
    if (!emailValidated.value || !passValidated.value) {
      return false;
    }
    return true;
  };

  const saveUser = (uid: string) => {
    firestore()
      .collection('users')
      .doc(uid)
      .get()
      .then(res => {
        const user = res.data();
        userPersist(user);
        navigation.navigate('Private');
      })
      .catch((error: any) => {});
  };

  const signIn = () => {
    auth()
      .signInWithEmailAndPassword(email, pass)
      .then(res => {
        const {uid} = res.user;
        saveUser(uid);
      })
      .catch(error => {
        switch (error.code) {
          case 'auth/user-not-found':
            return showMessage({
              type: 'danger',
              message: 'Erro',
              description: 'Usuário não encontrado.',
              titleStyle: {fontFamily: 'Montserrat-SemiBold', fontSize: 16},
            });
          case 'auth/wrong-password':
            return showMessage({
              type: 'danger',
              message: 'Erro',
              description: 'E-mail ou senha incorreta',
              titleStyle: {fontFamily: 'Montserrat-SemiBold', fontSize: 16},
            });
        }
      });
  };
  return (
    <LinearBackground>
      <Scroll initial>
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
          <Input
            label="E-mail"
            value={email}
            onText={e => setEmail(e)}
            type="outlined"
            error={errors.email}
          />
          <Space vertical={4} />
          <Input
            label="Senha"
            value={pass}
            onText={e => setPass(e)}
            type="outlined"
            error={errors.pass}
            password
          />
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
            onPress={() => {
              const verified = verify();
              if (verified) {
                return signIn();
              }
            }}
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
