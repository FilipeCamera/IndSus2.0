import Biomes from '@biomes';
import {Colors} from '@styles';
import {Button, Card, Header, Modals, Scroll, Space, Text} from 'components';
import React, {useState} from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';

import ResearchBack from 'assets/svg/researchBack.svg';
import {deleteResearch} from 'functions';

interface StepOneProps {
  setState: any;
  setArea: any;
  area: number;
  dataInfo: any;
  dataArea: any[];
}

const Step1 = ({setState, area, setArea, dataInfo, dataArea}: StepOneProps) => {
  const [visible, setVisible] = useState(false);
  console.tron.log(dataArea);
  return (
    <Scroll>
      <Header
        title="Pesquisa"
        mode="common"
        back
        onBack={() => setVisible(!visible)}
        onAdd={() => {
          setArea(area + 1);
          setState('data');
        }}
        add
      />
      <Modals
        title="Deseja voltar?"
        desc="A pesquisa criada será perdida"
        textCancel="Não"
        textOk="Sim"
        visible={visible}
        setVisible={setVisible}
        onFunction={() => {
          deleteResearch();
          setState('form');
        }}
      />
      <Space vertical={20} />
      <Card style={{width: '100%'}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {Biomes.map(biome => {
            if (biome.value === dataInfo.biome) {
              return (
                <View
                  key={biome.color}
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 15,
                    backgroundColor: biome.color,
                  }}
                />
              );
            }
          })}
          <Space horizontal={4} />
          <View>
            <Text
              title={dataInfo.propertyName}
              size={16}
              weight={500}
              color={Colors.secundaryText}
            />
            <Text
              title={`${dataInfo.city}, ${dataInfo.uf}`}
              size={14}
              weight={500}
              color={Colors.secundaryTextGray}
            />
          </View>
        </View>
        <Space vertical={10} />
        {!!dataArea && dataArea.length !== 0 && (
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {dataArea.map(area => (
              <TouchableOpacity
                style={{
                  padding: 8,
                  backgroundColor: Colors.lightBlue,
                  borderRadius: 8,
                  marginRight: 8,
                }}>
                <Text
                  title={area.title}
                  size={14}
                  weight={600}
                  color={Colors.blue}
                />
              </TouchableOpacity>
            ))}
          </ScrollView>
        )}
        {dataArea.length === 0 && (
          <View>
            <Text
              title="Você não tem nenhuma área de estudo criada"
              center
              weight={400}
              size={15}
              color={Colors.blue}
            />
            <Space vertical={10} />
            <ResearchBack width="100%" />
            <Space vertical={15} />
            <Button
              mode="text"
              title="Criar área"
              weight={500}
              size={14}
              color={Colors.blue}
              onPress={() => {
                setArea(area + 1);
                setState('data');
              }}
            />
          </View>
        )}
      </Card>
      <Space vertical={40} />
      <Button
        title="Finalizar"
        weight={500}
        shadow={4}
        size={15}
        background={Colors.blue}
        color={Colors.background}
      />
    </Scroll>
  );
};

export default Step1;
