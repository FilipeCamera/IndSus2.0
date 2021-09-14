import {Colors} from '@styles';
import {
  BiomesDropdown,
  Button,
  Header,
  Input,
  Row,
  Space,
  UFDropdown,
} from 'components';
import {researchPersist} from 'functions';
import React, {useState} from 'react';
import {KeyboardAvoidingView, Platform, View} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {fieldValidate} from 'validation';
import {FormStyle} from './styles';

interface FormProps {
  navigation: any;
  setState: any;
}

const Form = ({navigation, setState}: FormProps) => {
  const [ownerName, setOwnerName] = useState('');
  const [propertyName, setPropertyName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');
  const [biome, setBiome] = useState('');
  const [errors, setErrors] = useState({
    biome: '',
    ownerName: '',
    propertyName: '',
    address: '',
    city: '',
    uf: '',
  });
  const verify = () => {
    const biomeVerified = fieldValidate(biome);
    const ownerNameVerified = fieldValidate(ownerName);
    const propertyNameVerified = fieldValidate(propertyName);
    const adressVerified = fieldValidate(address);
    const cityVerified = fieldValidate(city);
    const ufVerified = fieldValidate(uf);
    setErrors({
      ...errors,
      biome: biomeVerified.error,
      ownerName: ownerNameVerified.error,
      propertyName: propertyNameVerified.error,
      address: adressVerified.error,
      city: cityVerified.error,
      uf: ufVerified.error,
    });

    if (
      !biomeVerified.value &&
      !ownerNameVerified.value &&
      !propertyNameVerified.value &&
      !adressVerified.value &&
      !cityVerified.value &&
      !ufVerified.value
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
          onBack={() => navigation.goBack()}
        />
        <Space vertical={20} />
        <BiomesDropdown
          error={errors.biome}
          biome={biome}
          setBiome={setBiome}
        />
        <Space vertical={20} />
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
        <Input
          type="outlined"
          label="Endereço"
          value={address}
          onText={e => setAddress(e)}
          error={errors.address}
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
                ownerName: ownerName,
                propertyName: propertyName,
                address: address,
                city: city,
                uf: uf,
                biome: biome,
              };
              researchPersist(data);
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
