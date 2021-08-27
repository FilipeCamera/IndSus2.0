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
import React, {useState, useEffect} from 'react';
import {View} from 'react-native';

import Line from 'assets/svg/line.svg';
import {emailValidate, equalPass, fieldPass} from 'validation';
import {auth, firestore} from 'firebase';
import {userPersist} from 'functions';

import {showMessage} from 'react-native-flash-message';

const Register = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [errors, setErrors] = useState({email: '', pass: '', confirmPass: ''});

  const verify = () => {
    const emailValidated = emailValidate(email);
    const passValidated = fieldPass(pass, 6);
    const confirmPassValidated = fieldPass(confirmPass, 6);
    const equals = equalPass(pass, confirmPass);

    setErrors({
      ...errors,
      email: emailValidated.error,
      pass: passValidated.error,
      confirmPass: confirmPassValidated.error,
    });
    if (
      !emailValidated.value ||
      !passValidated.value ||
      !confirmPassValidated.value
    ) {
      return false;
    }

    if (!equals.value) {
      setErrors({...errors, pass: equals.error, confirmPass: equals.error});
      return false;
    }
    return true;
  };
  const saveUser = (uid: string) => {
    const user = {
      uid: uid,
      email: email,
      completeRegister: false,
      createdAt: firestore.FieldValue.serverTimestamp(),
    };
    firestore()
      .collection('users')
      .doc(uid)
      .set(user)
      .then(() => {
        userPersist(user);
      })
      .catch((error: any) => {});
  };
  const signUp = (email: string, password: string) => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async (res: any) => {
        const {uid} = await res.user;
        saveUser(uid);
        navigation.navigate('Private');
      })
      .catch(error => {
        switch (error.code) {
          case 'auth/email-already-in-use':
            return showMessage({
              type: 'danger',
              message: 'Usuário já cadastrado!',
            });
        }
      });
  };
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
          <Input
            label="E-mail"
            type="outlined"
            value={email}
            keyType="email-address"
            onText={e => setEmail(e)}
            error={errors.email}
          />
          <Space vertical={4} />
          <Input
            label="Senha"
            type="outlined"
            value={pass}
            onText={e => setPass(e)}
            password
            error={errors.pass}
          />
          <Space vertical={4} />
          <Input
            label="Confirmar senha"
            type="outlined"
            value={confirmPass}
            onText={e => setConfirmPass(e)}
            password
            error={errors.confirmPass}
          />
          <Space vertical={25} />
          <Button
            background={Colors.blue}
            weight={600}
            size={15}
            color={Colors.background}
            title="Cadastrar"
            shadow={4}
            onPress={() => {
              const verified = verify();

              if (verified) {
                signUp(email, pass);
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
              title="Já possui uma conta?"
              size={15}
              weight={400}
              color={Colors.secundaryTextGray}
            />
            <Space horizontal={2} />
            <Button
              mode="text"
              title="Faça o login"
              size={15}
              weight={600}
              color={Colors.blue}
              onPress={() => navigation.navigate('Login')}
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
            title="Sign up with Google"
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

export default Register;
