import Biomes from '@biomes';
import {Colors} from '@styles';
import {
  BoxNota,
  Button,
  Card,
  Header,
  Modals,
  RadarChart,
  Scroll,
  Space,
  Text,
} from 'components';
import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';

import StarIcon from 'assets/svg/star.svg';
import ResearchBack from 'assets/svg/researchBack.svg';
import RemoveIcon from 'assets/svg/removeCircleOutline.svg';
import EditIcon from 'assets/svg/EditLapis.svg';
import {deleteResearch} from 'functions';
import moment from 'moment';

interface StepOneProps {
  setState: any;
  setArea: any;
  area: number;
  dataInfo: any;
  dataArea: any[];
  setDataArea: any;
  setDataRadar: any;
  dataRadar: any[];
}

const Step1 = ({
  setState,
  area,
  setArea,
  dataInfo,
  dataArea,
  setDataArea,
  dataRadar,
  setDataRadar,
}: StepOneProps) => {
  const [visible, setVisible] = useState(false);
  const [areaTitle, setAreaTitle] = useState(
    dataArea.length !== 0 ? dataArea[0].title : 'Área 1',
  );
  const [loading, setLoading] = useState(true);
  const [cardPlus, setCardPlus] = useState(false);
  const [position, setPosition] = useState(0);
  console.tron.log(dataRadar);
  useEffect(() => {
    const load = setTimeout(() => setLoading(false), 200);
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
          setDataArea([]);
          setState('form');
        }}
      />
      {!!cardPlus && <Space vertical={20} />}
      {!!cardPlus && (
        <Card style={{width: '100%'}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{width: 40, height: 40, borderRadius: 20}}>
              <Image
                source={{uri: dataInfo.image}}
                style={{width: '100%', height: '100%', borderRadius: 999}}
              />
            </View>
            <Space horizontal={4} />
            <View>
              <Text
                title={dataInfo.propertyName}
                size={16}
                weight={500}
                color={Colors.secundaryText2}
              />
              <Text
                title={`${dataInfo.city}, ${dataInfo.uf}`}
                size={14}
                weight={500}
                color={Colors.secundaryTextGray}
              />
            </View>
          </View>
          <Space vertical={8} />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              title="Data:"
              weight={500}
              size={15}
              color={Colors.secundaryText2}
            />
            <Space horizontal={4} />
            <Text
              title={moment(dataArea.createDate).format('DD/MM/YYYY')}
              weight={400}
              size={15}
              color={Colors.secundaryText2}
            />
          </View>
          <Space vertical={2} />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              title="Áreas estudadas:"
              weight={500}
              size={15}
              color={Colors.secundaryText2}
            />
            <Space horizontal={4} />
            <Text
              title={`${dataArea.length} ${
                dataArea.length === 1 ? 'área' : 'áreas'
              }`}
              weight={400}
              size={15}
              color={Colors.secundaryText2}
            />
          </View>
        </Card>
      )}
      <Space vertical={20} />
      <Card style={{width: '100%'}}>
        {!!cardPlus && (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            {Biomes.map(biome => {
              if (biome.value === dataInfo.biome) {
                return (
                  <View
                    key={biome.color}
                    style={{
                      borderRadius: 15,
                      backgroundColor: biome.color,
                      alignItems: 'center',
                      justifyContent: 'center',
                      paddingVertical: 5,
                      paddingHorizontal: 10,
                    }}>
                    <Text
                      title={biome.label}
                      size={13}
                      weight={600}
                      color={Colors.background}
                    />
                  </View>
                );
              }
            })}
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity
                style={{
                  padding: 5,
                  backgroundColor: Colors.lightBlue3,
                  borderRadius: 99,
                }}>
                <EditIcon />
              </TouchableOpacity>
              <Space horizontal={4} />
              <TouchableOpacity
                style={{
                  borderRadius: 15,
                  backgroundColor: Colors.lightBlue3,
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingVertical: 5,
                  paddingHorizontal: 10,
                  flexDirection: 'row',
                }}
                onPress={() =>
                  setDataArea(dataArea.filter(area => area.title !== areaTitle))
                }>
                <RemoveIcon />
                <Space horizontal={4} />
                <Text
                  title="Excluir"
                  size={13}
                  weight={600}
                  color={Colors.secundaryText2}
                />
              </TouchableOpacity>
            </View>
          </View>
        )}
        {!cardPlus && (
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{width: 40, height: 40, borderRadius: 20}}>
              <Image
                source={{uri: dataInfo.image}}
                style={{width: '100%', height: '100%', borderRadius: 999}}
              />
            </View>
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
        )}
        <Space vertical={10} />
        {!!dataArea && dataArea.length !== 0 && (
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {dataArea.map((area, pos) => (
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
                  setPosition(pos);
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
            <Space vertical={8} />
            <ActivityIndicator color={Colors.blue} size="large" />
          </View>
        )}
        {!loading && <Space vertical={4} />}
        {!loading && dataArea.length !== 0 && (
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
                                  style={{
                                    flexDirection: 'column',
                                    height: 45,
                                    justifyContent: 'center',
                                  }}>
                                  <View
                                    style={{
                                      flexDirection: 'row',
                                      alignItems: 'center',
                                    }}>
                                    <View
                                      style={{
                                        backgroundColor: Colors.lightBlue3,
                                        width: 20,
                                        height: 20,
                                        borderRadius: 10,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                      }}>
                                      <Text
                                        title={1}
                                        size={14}
                                        weight={600}
                                        color={Colors.background}
                                      />
                                    </View>
                                    <Space horizontal={4} />
                                    <Text
                                      lines={1}
                                      title={cr.desc}
                                      weight={600}
                                      size={14}
                                      color={Colors.secundaryText2}
                                    />
                                  </View>
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
              {!!dataArea && dataArea.length !== 0 && (
                <>
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
                </>
              )}
            </View>
          </View>
        )}
        {!loading && !cardPlus && dataArea.length !== 0 && (
          <>
            <Space vertical={8} />
            <Button
              mode="text"
              title="Mais detalhes"
              weight={600}
              size={14}
              color={Colors.blue}
              onPress={() => {
                setCardPlus(true);
                setLoading(true);
              }}
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
      {!!cardPlus && (
        <RadarChart radarData={dataRadar[position]} loading={loading} />
      )}
      {!!cardPlus && <Space vertical={30} />}
      <View
        style={{
          width: '100%',
        }}>
        <Button
          title="Finalizar"
          weight={500}
          shadow={4}
          size={15}
          background={Colors.blue}
          color={Colors.background}
        />
      </View>
      <Space vertical={4} />
    </Scroll>
  );
};

export default Step1;
