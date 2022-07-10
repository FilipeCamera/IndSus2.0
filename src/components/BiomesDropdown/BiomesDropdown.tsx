import {Colors} from '@styles';
import {Text} from 'components';
import React, {useState} from 'react';
import {Modal, Portal} from 'react-native-paper';
import {BiomesDropdownStyle, ButtonBiome} from './styles';

import Biomes from '@biomes';
import {FlatList, View} from 'react-native';

const BiomesDropdown = ({error, setBiome, biome}: any) => {
  const [color, setColor] = useState('#f2f2f2');
  const [show, setShow] = useState(false);

  const _renderItem = ({item}: any) => {
    return (
      <ButtonBiome
        onPress={() => {
          setBiome(item.value);
          setShow(!show);
          setColor(item.color);
        }}>
        <Text
          title={item.label}
          size={18}
          weight={500}
          color={Colors.textBlack}
        />
        <View
          style={{
            width: 30,
            height: 30,
            borderRadius: 15,
            backgroundColor: item.color,
          }}
        />
      </ButtonBiome>
    );
  };
  return (
    <>
      <BiomesDropdownStyle onPress={() => setShow(!show)}>
        <View
          style={{
            width: 140,
            height: 140,
            borderRadius: 70,
            backgroundColor: error ? Colors.lightRed : color,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View style={{width: 100}}>
            <Text
              title={biome === '' ? 'Selecione um bioma' : biome}
              size={15}
              weight={500}
              center
              color={
                error !== ''
                  ? Colors.red
                  : biome === ''
                  ? Colors.secundaryTextGray
                  : Colors.background
              }
            />
          </View>
        </View>
      </BiomesDropdownStyle>
      <Portal>
        <Modal
          visible={show}
          onDismiss={() => setShow(!show)}
          style={{margin: 16}}
          contentContainerStyle={{
            backgroundColor: Colors.background,
            padding: 16,
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
