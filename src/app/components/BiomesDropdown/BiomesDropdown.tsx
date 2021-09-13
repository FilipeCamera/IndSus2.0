import {Colors} from '@styles';
import {Input, Text} from 'components';
import React, {useState} from 'react';
import {Modal, Portal} from 'react-native-paper';
import {BiomesDropdownStyle, ButtonBiome} from './styles';

import Biomes from '@biomes';
import {FlatList} from 'react-native';
const BiomesDropdown = () => {
  const [value, setValue] = useState('');
  const [show, setShow] = useState(false);

  const _renderItem = ({item}: any) => {
    return (
      <ButtonBiome
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
      </ButtonBiome>
    );
  };
  return (
    <>
      <BiomesDropdownStyle onPress={() => setShow(!show)}>
        <Input label="Bioma" value={value} type="outlined" disabled />
      </BiomesDropdownStyle>
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
            data={Biomes}
            keyExtractor={item => item.value}
            renderItem={_renderItem}
            showsVerticalScrollIndicator={false}
          />
        </Modal>
      </Portal>
    </>
  );
};

export default BiomesDropdown;
