import {Colors} from '@styles';
import {
  Board,
  Button,
  Card,
  Header,
  RoundedButton,
  Scroll,
  Space,
  Text,
} from 'components';
import React, {useEffect, useState, useCallback} from 'react';
import {Image, Platform, TouchableOpacity, View} from 'react-native';
import {ActivityIndicator, Avatar} from 'react-native-paper';
import {useSelector} from 'react-redux';

import GraphIcon from 'assets/svg/graph.svg';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconSimple from 'react-native-vector-icons/SimpleLineIcons';
import {useNetInfo} from '@react-native-community/netinfo';
import {useResearch, useSendFile} from 'hooks';
import {firestore} from 'firebase';
import {showMessage} from 'react-native-flash-message';
import {deleteRadar, deleteResearch} from 'functions';

const Home = ({navigation}: any) => {
  const {sendFile} = useSendFile();
  const {getResearchDataToken, getResearchToken, getResearchesByUserDateNow} =
    useResearch();
  const user = useSelector((state: any) => state.auth.user);
  const research = useSelector((state: any) => state.research.research);
  const radar = useSelector((state: any) => state.radar);
  const connection = useNetInfo();
  const [card, setCard] = useState(false);
  const [loadingCard, setLoadingCard] = useState(false);
  const [send, setSend] = useState(false);
  const [researches, setResearches] = useState<any[]>();

  useEffect(() => {
    if (
      Object.keys(research).length &&
      Object.keys(radar).length !== 0 &&
      research.data !== undefined
    ) {
      setCard(true);
    }
  }, [research, radar]);

  useEffect(() => {
    getResearchesByUserDateNow({
      userId: user.uid,
      onComplete: (researchs: any[]) => {
        if (researchs) {
          console.tron.log(researchs);
          setResearches(researchs);
        }
      },
      onFail: (err: any) => {},
    });

    return () => setResearches([]);
  }, []);
  const handleSaveCloud = useCallback(() => {
    setLoadingCard(true);
    if (connection.isConnected && connection.isInternetReachable) {
      const {radar: radarInfo} = radar;
      const {
        image,
        ownerName,
        propertyName,
        city,
        uf,
        token,
        biome,
        createDate,
        data,
      } = research;

      const filename =
        Date.now().toString() + image.substring(image.lastIndexOf('/') + 1);
      const uploadUri =
        Platform.OS === 'ios' ? image.replace('file://', '') : image;

      firestore()
        .collection('researches')
        .doc()
        .set({
          ownerName: ownerName,
          propertyName: propertyName,
          city: city,
          uf: uf,
          biome: biome,
          createDate: new Date(createDate),
          userId: user.uid,
          token: token,
          createdAt: firestore.FieldValue.serverTimestamp(),
        })
        .then(() => {
          getResearchToken({
            token: token,
            onComplete: async (res: any) => {
              if (res) {
                sendFile({
                  uri: uploadUri,
                  filename,
                  path: 'researchs',
                  onComplete: async (url: string) => {
                    await firestore()
                      .collection('researches')
                      .doc(res.id)
                      .update({image: url, ...res});
                  },
                  onFail: error => {},
                });
                await firestore()
                  .collection('dataAreas')
                  .doc(res.id)
                  .set(Object.assign({}, data));
                await firestore()
                  .collection('radarAreas')
                  .doc(res.id)
                  .set(Object.assign({}, radarInfo.info));

                deleteResearch();
                deleteRadar();
                setSend(true);
                setLoadingCard(false);
              }
            },
            onFail: err => {},
          });
        })
        .catch(err => {});
    } else {
      setLoadingCard(false);
      showMessage({
        type: 'danger',
        message: 'Error',
        description: 'Você não possui conexão com internet',
      });
    }
  }, [connection.isConnected, connection.isInternetReachable]);

  const handleRemoveResearch = async () => {
    await deleteResearch();
    await deleteRadar();
    setCard(false);
  };
  return (
    <Scroll>
      <View style={{flex: 1, width: '100%', marginBottom: 40}}>
        <Header navigation={navigation} />
        {!!card && <Space vertical={15} />}
        {!!card && (
          <Card style={{width: '100%'}}>
            {!!loadingCard && !send && (
              <View
                style={{
                  flex: 1,
                  height: 140,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <ActivityIndicator size="small" color={Colors.blue} />
                <Space vertical={4} />
                <Text
                  title="Enviando sua pesquisa"
                  size={12}
                  weight={500}
                  color={Colors.lightGray}
                />
              </View>
            )}
            {!loadingCard && !send && (
              <>
                <TouchableOpacity
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    alignSelf: 'flex-end',
                    marginBottom: 8,
                  }}
                  onPress={() => handleRemoveResearch()}>
                  <IconSimple name="close" size={18} color={Colors.red} />
                </TouchableOpacity>
                <Text
                  title="Você tem uma pesquisa salva, deseja enviar para a nuvem?"
                  size={16}
                  weight={600}
                  color={Colors.textBlack}
                  center
                />
                <Space vertical={4} />
                <View
                  style={{
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{flexDirection: 'column', flex: 1}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <View style={{width: 40, height: 40, borderRadius: 20}}>
                        <Image
                          source={{uri: research.image}}
                          style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: 9999,
                          }}
                        />
                      </View>
                      <Space horizontal={4} />
                      <Text
                        title={research.ownerName}
                        size={14}
                        weight={500}
                        color={Colors.textGray}
                      />
                    </View>
                    <Space vertical={1} />
                    <Text
                      title={`Propriedade: ${research.propertyName}`}
                      size={14}
                      weight={500}
                      color={Colors.textGray}
                    />
                    <Space vertical={1} />
                    <Text
                      title={`Cidade: ${research.city}`}
                      size={14}
                      weight={500}
                      color={Colors.textGray}
                    />
                    <Space vertical={1} />
                    <Text
                      title={`Estado: ${research.uf}`}
                      size={14}
                      weight={500}
                      color={Colors.textGray}
                    />
                  </View>
                  <Space vertical={4} />
                  <TouchableOpacity
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      alignSelf: 'center',
                    }}
                    onPress={() => handleSaveCloud()}>
                    <Text
                      title="Enviar pesquisa para nuvem"
                      size={14}
                      weight={600}
                      color={Colors.blue}
                    />
                  </TouchableOpacity>
                </View>
              </>
            )}
            {!loadingCard && !!send && (
              <View
                style={{
                  flex: 1,
                  height: 140,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  title="Sua pesquisa foi enviada com sucesso"
                  size={15}
                  weight={600}
                  color={Colors.textMediumBlack}
                  center
                />
                <Space vertical={12} />
                <View style={{position: 'absolute', bottom: 0}}>
                  <Button
                    mode="text"
                    title="Fechar"
                    size={14}
                    weight={600}
                    color={Colors.blue}
                    onPress={() => setCard(false)}
                  />
                </View>
              </View>
            )}
          </Card>
        )}
        <Space vertical={15} />
        <Card style={{width: '100%', elevation: 6}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <View style={{flexDirection: 'column', alignItems: 'center'}}>
              <Avatar.Image size={64} source={{uri: user.avatar}} />
              <Space vertical={5} />
              <View
                style={{
                  padding: 8,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: Colors.lightGreen,
                  borderRadius: 8,
                }}>
                <Text
                  title="online"
                  size={13}
                  weight={600}
                  color={Colors.green}
                />
              </View>
            </View>
            <Space horizontal={15} />
            <View style={{flexDirection: 'column', alignItems: 'flex-start'}}>
              <Text
                title={user.name}
                size={18}
                weight={700}
                color={Colors.textBlack}
              />
              <Text
                title={user.work}
                size={14}
                weight={500}
                color={Colors.textGray}
              />
              <Space vertical={8} />
              <GraphIcon />
            </View>
          </View>
        </Card>
        <Space vertical={25} />
        <Board
          title="Pesquisas Recentes"
          navigation={navigation}
          researches={researches}
        />
      </View>
      <RoundedButton onPress={() => navigation.navigate('Research')}>
        <Icon name="add" size={36} color={Colors.background} />
      </RoundedButton>
    </Scroll>
  );
};

export default Home;
