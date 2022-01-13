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
  BackHandler,
  Image,
  Platform,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';

import StarIcon from 'assets/svg/star.svg';
import ResearchBack from 'assets/svg/researchBack.svg';
import RemoveIcon from 'assets/svg/removeCircleOutline.svg';
import EditIcon from 'assets/svg/EditLapis.svg';
import {deleteResearch, researchPersist} from 'functions';
import moment from 'moment';

import {useNetInfo} from '@react-native-community/netinfo';
import {radarPersist} from 'src/functions/radar';
import {firestore} from 'firebase';
import {showMessage} from 'react-native-flash-message';
import {useSelector} from 'react-redux';
import {useResearch, useSendFile} from 'hooks';

interface StepOneProps {
  setState: any;
  setArea: any;
  area: number;
  dataInfo: any;
  dataArea: any[];
  areaTitle: string;
  setAreaTitle: any;
  setDataArea: any;
  setDataRadar: any;
  handleDeleteArea: any;
  dataRadar: any[];
  setDataAreaSelected: any;
  position: number;
  setPosition: any;
  navigation: any;
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
  setDataAreaSelected,
  position,
  setPosition,
  areaTitle,
  setAreaTitle,
  handleDeleteArea,
  navigation,
}: StepOneProps) => {
  const user = useSelector((state: any) => state.auth.user);
  const {getResearchDataToken} = useResearch();
  const connection = useNetInfo();
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [cardPlus, setCardPlus] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [finalVisible, setFinalVisible] = useState(false);
  const [finalLoading, setFinalLoading] = useState(true);
  const [token, setToken] = useState('');
  const {sendFile} = useSendFile();

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
  useEffect(() => {
    const load = setTimeout(() => setLoading(false), 200);
    function generateToken(n: number) {
      const chars =
        'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      let token = '';
      for (var i = 0; i < n; i++) {
        token += chars[Math.floor(Math.random() * chars.length)];
      }
      setToken(token);
    }
    generateToken(16);
    return () => {
      clearInterval(load);
    };
  }, [loading]);

  const handleCreateResearch = async () => {
    console.tron.log('Connection:', connection.isConnected);
    if (dataArea.length !== 0) {
      setFinalVisible(true);
      if (connection.isConnected && connection.isInternetReachable) {
        const {image} = dataInfo;
        const filename =
          Date.now().toString() + image.substring(image.lastIndexOf('/') + 1);
        const uploadUri =
          Platform.OS === 'ios' ? image.replace('file://', '') : image;
        sendFile({
          uri: uploadUri,
          filename,
          path: 'researchs',
          onComplete: async (url: string) => {
            await firestore()
              .collection('researches')
              .doc()
              .set({
                image: url,
                ownerName: dataInfo.ownerName,
                propertyName: dataInfo.propertyName,
                city: dataInfo.city,
                uf: dataInfo.uf,
                biome: dataInfo.biome,
                createDate: dataInfo.createDate,
                userId: user.uid,
                token: token,
                createdAt: firestore.FieldValue.serverTimestamp(),
              })
              .then(() => {
                getResearchDataToken({
                  token: token,
                  onComplete: async (uid: any) => {
                    if (uid) {
                      await firestore()
                        .collection('dataAreas')
                        .doc(uid)
                        .set(Object.assign({}, dataArea));
                      await firestore()
                        .collection('radarAreas')
                        .doc(uid)
                        .set(Object.assign({}, dataRadar));

                      setFinalLoading(false);
                    }
                  },
                  onFail: err => {},
                });
                setFinalLoading(false);
              })
              .catch(err => {});
          },
          onFail: error => {
            console.log(error);
          },
        });
      } else {
        const research = {
          image: dataInfo.image,
          biome: dataInfo.biome,
          ownerName: dataInfo.ownerName,
          propertyName: dataInfo.propertyName,
          city: dataInfo.city,
          uf: dataInfo.uf,
          token: token,
          createDate: dataInfo.createDate,
          data: dataArea,
        };
        researchPersist(research);
        radarPersist(dataRadar);
        setFinalLoading(false);
      }
    } else {
      setModalVisible(true);
    }
  };

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
        visible={modalVisible}
        setVisible={setModalVisible}
        title="Não foi possível finalizar"
        desc="Você ainda não criou uma área de pesquisa"
        textOk="Ok"
        onFunction={() => setModalVisible(false)}
      />
      <Modals
        visible={finalVisible}
        setVisible={setFinalVisible}
        title="Finalizando a pesquisa"
        desc="Pesquisa concluída com sucesso"
        textOk="Ok"
        loading={finalLoading}
        onFunction={() => {
          setFinalVisible(false);
          navigation.navigate('Dashboard');
        }}
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
          setDataRadar([]);
          setArea(0);
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
            {dataArea.length !== 0 && (
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity
                  style={{
                    padding: 5,
                    backgroundColor: Colors.lightBlue3,
                    borderRadius: 99,
                  }}
                  onPress={() => {
                    setDataAreaSelected(dataArea[position].info);
                    setState('dataEdit');
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
                  onPress={() => {
                    setDataArea(
                      dataArea.filter(area => area.title !== areaTitle),
                    );
                    setDataRadar(dataRadar.filter((a, i) => i !== position));
                    handleDeleteArea;
                  }}>
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
            )}
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
                    return area.info.map((info: {data: any[]}) => {
                      return info.data.map((data: {ind: any[]}) => {
                        return data.ind.map((ind: {data: any[]}) => {
                          return ind.data.map(
                            (cr: {desc: string | undefined}) => {
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
                            },
                          );
                        });
                      });
                    });
                  })}
              </View>
            </View>
            <View style={{flexDirection: 'column', alignItems: 'center'}}>
              {!!dataArea && areaTitle !== '' && dataArea.length !== 0 && (
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
                        return area.info.map((info: {data: any[]}) => {
                          return info.data.map((data: {ind: any[]}) => {
                            return data.ind.map((ind: {data: any[]}) => {
                              return ind.data.map((cr: {cri: any[]}) => {
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
      {!!cardPlus && areaTitle !== '' && dataArea.length !== 0 && (
        <RadarChart
          radarData={dataRadar[position]}
          loading={loading}
          title={areaTitle}
        />
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
          onPress={() => handleCreateResearch()}
        />
      </View>
      <Space vertical={4} />
    </Scroll>
  );
};

export default Step1;
