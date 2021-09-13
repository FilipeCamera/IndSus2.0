import {Colors} from '@styles';
import {Input, Text} from 'components';
import React, {useState} from 'react';
import {Modal, Portal} from 'react-native-paper';
import {ButtonUf, DropdownUfStyle} from './styles';

import Ufs from '@ufs';
import {FlatList} from 'react-native';
const UFDropdown = () => {
  const [value, setValue] = useState('');
  const [show, setShow] = useState(false);

  const _renderItem = ({item}: any) => {
    return (
      <ButtonUf
        onPress={() => {
          setValue(item.value);
          setShow(!show);
        }}>
        <Text
          title={item.label}
          size={16}
          weight={500}
          color={Colors.textBlack}
        />
      </ButtonUf>
    );
  };
  return (
    <>
      <DropdownUfStyle onPress={() => setShow(!show)}>
        <Input label="Estado" value={value} type="outlined" disabled />
      </DropdownUfStyle>
      <Portal>
        <Modal
          visible={show}
          onDismiss={() => setShow(!show)}
          style={{margin: 16}}
          contentContainerStyle={{
            backgroundColor: Colors.background,
            padding: 16,
            height: '80%',
            borderRadius: 20,
          }}>
          <FlatList
            data={Ufs}
            keyExtractor={item => item.value}
            renderItem={_renderItem}
            showsVerticalScrollIndicator={false}
          />
        </Modal>
      </Portal>
    </>
  );
};

export default UFDropdown;
