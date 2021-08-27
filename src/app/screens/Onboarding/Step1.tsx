import {Colors} from '@styles';
import {AvatarSelect, Button, Input, Space} from 'components';
import {firestore} from 'firebase';
import {userPersist} from 'functions';
import React, {useState, useEffect} from 'react';
import {ScrollView, View} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {useSelector} from 'react-redux';
import {fieldValidate} from 'validation';

const Step1 = ({navigation}: any) => {
  const user = useSelector((state: any) => state.auth.user);
  const [name, setName] = useState('');
  const [work, setWork] = useState('');
  const [avatar, setAvatar] = useState('');
  const [complete, setComplete] = useState(false);
  const [errors, setErrors] = useState({name: '', work: '', avatar: ''});
  useEffect(() => {
    setComplete(true);
  }, []);
  const verify = () => {
    const nameVerified = fieldValidate(name);
    const workVerified = fieldValidate(work);
    const avatarVerified = fieldValidate(avatar);
    setErrors({
      ...errors,
      name: nameVerified.error,
      work: workVerified.error,
      avatar: avatarVerified.error,
    });

    if (!nameVerified.value && !workVerified.value && !avatarVerified.value) {
      return true;
    }
    return false;
  };
  const handleComplete = () => {
    const data = {
      ...user,
      name: name,
      work: work,
      avatar: avatar,
      completeRegister: complete,
    };
    firestore()
      .collection('users')
      .doc(user.uid)
      .update(data)
      .then(() => {
        userPersist(data);
        showMessage({type: 'success', message: 'Cadastro concluído!'});
        navigation.navigate('Home');
      });
  };
  return (
    <ScrollView
      style={{backgroundColor: Colors.background, flexGrow: 1, padding: 16}}
      showsVerticalScrollIndicator={false}>
      <Space vertical={20} />
      <AvatarSelect
        avatar={avatar}
        setAvatar={setAvatar}
        error={errors.avatar}
      />
      <Space vertical={25} />
      <Input
        label="Nome Completo"
        type="outlined"
        value={name}
        onText={e => setName(e)}
        error={errors.name}
      />
      <Space vertical={4} />
      <Input
        label="Área em que atua"
        type="outlined"
        value={work}
        onText={e => setWork(e)}
        error={errors.work}
      />
      <Space vertical={30} />
      <Button
        title="Finalizar"
        background={Colors.blue}
        weight={600}
        size={16}
        color={Colors.background}
        shadow={4}
        onPress={() => {
          const verified = verify();

          if (verified) {
            handleComplete();
          }
        }}
      />
    </ScrollView>
  );
};

export default Step1;
