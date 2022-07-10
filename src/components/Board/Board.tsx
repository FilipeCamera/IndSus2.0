import React from 'react';

import {Row, Text, Button, Space} from 'components';
import {BoardStyle, BoxResearch, styles} from './styles';
import {Image, View} from 'react-native';
import {Colors} from '@styles';

import Biomes from '@biomes';

interface BoardProps {
  title: string;
  navigation: any;
  researches: any[] | undefined;
}

const Board = ({title, navigation, researches}: BoardProps) => {
  return (
    <BoardStyle style={styles.shadow}>
      <Row noMargin>
        <Text title={title} size={20} weight={600} color={Colors.textBlack} />
        <Button
          title="Visualizar todos"
          size={13}
          weight={500}
          mode="text"
          color={Colors.blue}
          onPress={() => navigation.navigate('Researches')}
        />
      </Row>
      <Space vertical={6} />
      {!researches && (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 16,
          }}>
          <Text
            title="Nenhuma pesquisa encontrada"
            weight={500}
            size={11}
            color={Colors.textGray2}
          />
        </View>
      )}
      {!!researches && researches.length === 0 && (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 16,
          }}>
          <Text
            title="Nenhuma pesquisa encontrada"
            weight={500}
            size={11}
            color={Colors.textGray2}
          />
        </View>
      )}
      {!!researches &&
        researches.length !== 0 &&
        researches.map(item => (
          <BoxResearch key={item.id}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={{width: 40, height: 40, borderRadius: 20}}>
                <Image
                  source={{uri: item.res.image}}
                  style={{width: '100%', height: '100%', borderRadius: 9999}}
                />
              </View>
              <Space horizontal={4} />
              <View>
                <Text
                  title={item.res.propertyName}
                  size={13}
                  weight={700}
                  color={Colors.secundaryText}
                />
                <Text
                  title={`${item.res.city}, ${item.res.uf}`}
                  size={11}
                  weight={500}
                  color={Colors.secundaryText}
                />
              </View>
            </View>
            {Biomes.map(biome => {
              if (biome.value === item.res.biome) {
                return (
                  <View>
                    <Text
                      title={item.res.biome}
                      size={12}
                      weight={600}
                      color={biome.color}
                    />
                  </View>
                );
              }
            })}
          </BoxResearch>
        ))}
    </BoardStyle>
  );
};

export default Board;
