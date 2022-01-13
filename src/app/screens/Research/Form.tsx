import {Colors} from '@styles';
import {
  BiomesDropdown,
  Button,
  DateTime,
  Header,
  Input,
  Modals,
  Row,
  Space,
  UFDropdown,
  UploadImage,
} from 'components';
import React, {useEffect, useState} from 'react';
import {BackHandler, KeyboardAvoidingView, Platform, View} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {fieldValidate} from 'validation';
import {FormStyle} from './styles';

interface FormProps {
  navigation: any;
  setState: any;
  setDataInfo: any;
}

const Form = ({navigation, setState, setDataInfo}: FormProps) => {
  const [visible, setVisible] = useState(false);
  const [ownerName, setOwnerName] = useState('');
  const [propertyName, setPropertyName] = useState('');
  const [image, setImage] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');
  const [createDate, setCreateDate] = useState(new Date());
  const [biome, setBiome] = useState('');
  const [errors, setErrors] = useState({
    biome: '',
    ownerName: '',
    propertyName: '',
    city: '',
    uf: '',
    createDate: '',
    image: '',
  });
  const backChange = () => {
    setVisible(!visible);
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
    const biomeVerified = fieldValidate(biome);
    const ownerNameVerified = fieldValidate(ownerName);
    const propertyNameVerified = fieldValidate(propertyName);
    const cityVerified = fieldValidate(city);
    const ufVerified = fieldValidate(uf);
    const imageVerified = fieldValidate(image);
    setErrors({
      ...errors,
      biome: biomeVerified.error,
      ownerName: ownerNameVerified.error,
      propertyName: propertyNameVerified.error,
      city: cityVerified.error,
      uf: ufVerified.error,
      image: imageVerified.error,
    });

    if (
      !biomeVerified.value &&
      !ownerNameVerified.value &&
      !propertyNameVerified.value &&
      !cityVerified.value &&
      !ufVerified.value &&
      !imageVerified.value
    ) {
      return true;
    }
    return false;
  };

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
          onBack={() => setVisible(!visible)}
        />
        <Modals
          visible={visible}
          setVisible={setVisible}
          title="Deseja voltar?"
          desc="Caso deseje voltar, os dados preenchidos serão perdidos"
          textCancel="Cancelar"
          textOk="Voltar"
          onFunction={() => {
            setVisible(!visible);
            navigation.goBack();
          }}
        />
        <Space vertical={10} />
        <Row>
          <UploadImage image={image} setImage={setImage} />
          <BiomesDropdown
            error={errors.biome}
            biome={biome}
            setBiome={setBiome}
          />
        </Row>
        <Space vertical={10} />
        <Input
          type="outlined"
          label="Nome do proprietário"
          value={ownerName}
          onText={e => setOwnerName(e)}
          error={errors.ownerName}
        />
        <Space vertical={4} />
        <Input
          type="outlined"
          label="Nome da propriedade"
          value={propertyName}
          onText={e => setPropertyName(e)}
          error={errors.propertyName}
        />

        <Space vertical={4} />
        <Row noMargin>
          <View style={{width: '65%'}}>
            <Input
              type="outlined"
              label="Cidade"
              value={city}
              onText={e => setCity(e)}
              error={errors.city}
            />
          </View>
          <UFDropdown error={errors.uf} setUf={setUf} uf={uf} />
        </Row>
        <Space vertical={8} />
        <DateTime createDate={createDate} setCreateDate={setCreateDate} />
        <Space vertical={40} />
        <Button
          title="Avançar"
          shadow={4}
          background={Colors.blue}
          size={16}
          weight={600}
          color={Colors.background}
          onPress={() => {
            const verified = verify();

            if (verified) {
              const data = {
                image: image,
                ownerName: ownerName,
                propertyName: propertyName,
                city: city,
                uf: uf,
                biome: biome,
                createDate: createDate,
              };
              setDataInfo(data);
              setState('research');
            } else {
              showMessage({
                type: 'danger',
                message: 'Erro!',
                description: 'Preencha todos os campos.',
              });
            }
          }}
        />
      </FormStyle>
    </KeyboardAvoidingView>
  );
};

export default Form;
