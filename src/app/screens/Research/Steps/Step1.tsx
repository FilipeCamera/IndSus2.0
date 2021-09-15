import Biomes from '@biomes';
import {Colors} from '@styles';
import {Button, Card, Header, Scroll, Space, Text} from 'components';
import React, {useState} from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';

import ResearchBack from 'assets/svg/researchBack.svg';

interface StepOneProps {
  setState: any;
  setArea: any;
  area: number;
}

const Step1 = ({setState, area, setArea}: StepOneProps) => {
  const research = useSelector((state: any) => state.research.research);
  return (
    <Scroll>
      <Header
        title="Pesquisa"
        mode="common"
        back
        onBack={() => setState('form')}
        onAdd={() => {
          setArea(area + 1);
          setState('data');
        }}
        add
      />
      <Space vertical={20} />
      <Card style={{width: '100%'}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {Biomes.map(biome => {
            if (biome.value === research.biome) {
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
              title={research.propertyName}
              size={16}
              weight={500}
              color={Colors.secundaryText}
            />
            <Text
              title={`${research.city}, ${research.uf}`}
              size={14}
              weight={500}
              color={Colors.secundaryTextGray}
            />
          </View>
        </View>
        <Space vertical={15} />
        {!research.data && (
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
