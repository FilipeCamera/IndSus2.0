import Biomes from '@biomes';
import {Colors} from '@styles';
import {
  BoxNota,
  Button,
  Card,
  Header,
  Modals,
  Scroll,
  Space,
  Text,
} from 'components';
import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';

import StarIcon from 'assets/svg/star.svg';
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
  const [areaTitle, setAreaTitle] = useState('Área 1');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = setTimeout(() => setLoading(false), 500);
    return () => {
      clearInterval(load);
    };
  }, [loading]);

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
                  backgroundColor:
                    area.title === areaTitle
                      ? Colors.lightBlue
                      : Colors.background,
                  borderRadius: 8,
                  marginRight: 8,
                }}
                onPress={() => {
                  setAreaTitle(area.title);
                  setLoading(true);
                }}>
                <Text
                  title={area.title}
                  size={14}
                  weight={600}
                  color={
                    area.title === areaTitle
                      ? Colors.blue
                      : Colors.secundaryTextGray
                  }
                />
              </TouchableOpacity>
            ))}
          </ScrollView>
        )}
        {!!loading && (
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <ActivityIndicator color={Colors.blue} size="large" />
          </View>
        )}
        {!loading && <Space vertical={4} />}
        {!loading && (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
            }}>
            <View style={{width: '70%'}}>
              <View style={{height: 20, marginVertical: 2.5}} />
              <View style={{width: '100%'}}>
                {!!dataArea &&
                  dataArea.length !== 0 &&
                  dataArea.map(area => {
                    return area.info.map(info => {
                      return info.data.map(data => {
                        return data.ind.map(ind => {
                          return ind.data.map(cr => {
                            if (area.title === areaTitle) {
                              return (
                                <View
                                  key={cr.desc}
                                  style={{
                                    flexDirection: 'column',
                                    height: 45,
                                    justifyContent: 'center',
                                  }}>
                                  <Text
                                    lines={1}
                                    title={cr.desc}
                                    weight={600}
                                    size={14}
                                    color={Colors.secundaryText2}
                                  />
                                </View>
                              );
                            }
                          });
                        });
                      });
                    });
                  })}
              </View>
            </View>
            <View style={{flexDirection: 'column', alignItems: 'center'}}>
              <StarIcon />
              <Space vertical={2.5} />
              <View
                style={{
                  backgroundColor: Colors.lightBlue2,
                  borderTopLeftRadius: 15,
                  borderTopRightRadius: 15,
                  borderBottomLeftRadius: 15,
                  borderBottomRightRadius: 15,
                }}>
                {!!dataArea &&
                  dataArea.length !== 0 &&
                  dataArea.map((area, i) => {
                    return area.info.map(info => {
                      return info.data.map(data => {
                        return data.ind.map(ind => {
                          return ind.data.map(cr => {
                            if (area.title === areaTitle) {
                              return <BoxNota cri={cr.cri} />;
                            }
                          });
                        });
                      });
                    });
                  })}
              </View>
            </View>
          </View>
        )}
        {!loading && dataArea.length !== 0 && (
          <>
            <Space vertical={8} />
            <Button
              mode="text"
              title="Mais detalhes"
              weight={600}
              size={14}
              color={Colors.blue}
              onPress={() => {}}
            />
          </>
        )}
        {!loading && dataArea.length === 0 && (
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
      <Space vertical={30} />
      <View style={{width: '100%'}}>
        <Button
          title="Finalizar"
          weight={500}
          shadow={4}
          size={15}
          background={Colors.blue}
          color={Colors.background}
        />
      </View>
    </Scroll>
  );
};

export default Step1;
