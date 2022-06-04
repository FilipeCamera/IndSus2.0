import {Colors} from '@styles';
import {AvatarSelect, Button, Header, Input, Scroll, Space} from 'components';
import {firestore} from 'firebase';
import {userPersist} from 'functions';
import React, {useEffect, useState} from 'react';
import {BackHandler, ScrollView, View} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {useSelector} from 'react-redux';
import {fieldValidate} from 'validation';

const ProfileEdit = ({setState}: any) => {
  const user = useSelector((state: any) => state.auth.user);
  const [name, setName] = useState(user.name);
  const [work, setWork] = useState(user.work);
  const [avatar, setAvatar] = useState(user.avatar);
  const [errors, setErrors] = useState({name: '', work: '', avatar: ''});

  const backChange = () => {
    setState('');
    return true;
  };
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backChange,
    );
    return () => backHandler.remove();
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
    };
    firestore()
      .collection('users')
      .doc(user.uid)
      .update(data)
      .then(() => {
        userPersist(data);
        showMessage({
          type: 'success',
          message: 'Salvo!',
          description: 'Alterações feitas com sucesso.',
        });
      });
  };
  return (
    <>
      <Header
        back
        title="Editar Dados"
        mode="common"
        onBack={() => setState('')}
      />
      <Scroll>
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
        <View style={{width: '100%'}}>
          <Button
            title="Salvar"
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
        </View>
      </Scroll>
    </>
  );
};

export default ProfileEdit;
