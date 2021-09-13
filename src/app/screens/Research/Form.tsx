import {Colors} from '@styles';
import {
  AvatarSelect,
  BiomesDropdown,
  Button,
  Header,
  Input,
  Row,
  Space,
  UFDropdown,
} from 'components';
import React, {useState} from 'react';
import {KeyboardAvoidingView, Platform, View} from 'react-native';
import {FormStyle} from './styles';

const Form = ({navigation}: any) => {
  const [avatar, setAvatar] = useState('');
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <FormStyle
        contentContainerStyle={{flexGrow: 1, padding: 16, paddingBottom: 16}}
        showsVerticalScrollIndicator={false}>
        <Header
          mode="common"
          title="Formulário"
          back
          onBack={() => navigation.goBack()}
        />
        <Space vertical={20} />
        <AvatarSelect avatar={avatar} setAvatar={setAvatar} />
        <Space vertical={20} />
        <Input type="outlined" label="Nome do proprietário" />
        <Space vertical={4} />
        <Input type="outlined" label="Nome da propriedade" />
        <Space vertical={4} />
        <Input type="outlined" label="Endereço" />
        <Space vertical={4} />
        <Row noMargin>
          <View style={{width: '65%'}}>
            <Input type="outlined" label="Cidade" />
          </View>
          <UFDropdown />
        </Row>
        <Space vertical={4} />
        <BiomesDropdown />
        <Space vertical={40} />
        <Button
          title="Avançar"
          shadow={4}
          background={Colors.blue}
          size={16}
          weight={600}
          color={Colors.background}
        />
      </FormStyle>
    </KeyboardAvoidingView>
  );
};

export default Form;
