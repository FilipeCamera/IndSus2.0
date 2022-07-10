import React, {useState, useEffect, useMemo, useCallback} from 'react';

import {
  BottomModal,
  BoxNota,
  Card,
  Header,
  RadarChart,
  Scroll,
  Space,
  Text,
} from 'components';
import moment from 'moment';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors} from '@styles';
import {useRadarDataArea, useResearch, useSearch} from 'hooks';
import Biomes from '@biomes';

import StarIcon from 'assets/svg/star.svg';
import ShareIcon from 'assets/svg/share.svg';
import RemoveIcon from 'assets/svg/trash.svg';
import VisibleIcon from 'assets/svg/visible.svg';
import ResearchInfoDetails from './ResearchInfoDetails';

import {BackHandler} from 'react-native';
import {firestore, storage} from 'firebase';
import {showMessage} from 'react-native-flash-message';
import {useSelector} from 'react-redux';

interface Props {
  onBack: () => any;
  researh: any;
}

const ResearchInfo = ({onBack, researh}: Props) => {
  const user = useSelector((state: any) => state.auth.user);
  const {getResearchDataToken, getResearchToken} = useResearch();
  const {getRadarArea, getDataArea} = useRadarDataArea();
  const {search} = useSearch();
  const [state, setState] = useState('');
  const [researchId, setResearchId] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingInfo, setLoadingInfo] = useState<boolean>(true);
  const [dataInfo, setDataInfo] = useState<any[]>([]);
  const [radarInfo, setRadarInfo] = useState<any[]>([]);
  const [details, setDetails] = useState<boolean>(false);
  const [modalShare, setModalShare] = useState<boolean>(false);
  const [userShare, setUserShare] = useState<string>('');
  const [usersShare, setUsersShare] = useState<any[]>([]);
  const [researchDetails, setResearchDetails] = useState<any[]>([]);
  const [position, setPosition] = useState(0);
  const [areaTitle, setAreaTitle] = useState(
    dataInfo.length !== 0 ? dataInfo[0].title : 'Área 1',
  );

  const backChange = () => {
    onBack();
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
    getResearchDataToken({
      token: researh.token,
      onComplete: id => {
        if (id) {
          setResearchId(id);
          getDataArea({
            id: id,
            onComplete: data => {
              if (data) {
                const dataInf = Object.keys(data).map(key => {
                  let info = data[key];

                  return info;
                });
                setDataInfo(dataInf);
              }
            },
            onFail: err => {},
          });
          getRadarArea({
            id: id,
            onComplete: radar => {
              if (radar) {
                const radarInf = Object.keys(radar).map(key => {
                  let info = radar[key];

                  return info;
                });
                setRadarInfo(radarInf);
                setLoading(false);
              }
            },
            onFail: err => {},
          });
        }
      },
      onFail: err => {},
    });
  }, []);

  useMemo(() => {
    if (loadingInfo) {
      setTimeout(() => setLoadingInfo(false), 1000);
    }
  }, [loadingInfo]);

  const handleRevomeResearch = async (token: string) => {
    getResearchToken({
      token: token,
      onComplete: (res: any) => {
        if (res) {
          storage()
            .refFromURL(res.image)
            .delete()
            .then(() => {
              firestore().collection('researches').doc(res.id).delete();
              firestore().collection('dataAreas').doc(res.id).delete();
              firestore().collection('radarAreas').doc(res.id).delete();
            })
            .finally(() => {
              showMessage({
                type: 'success',
                message: 'Sucesso',
                description: 'Sua pesquisa foi apagada.',
              });
              return onBack();
            });
        }
      },
      onFail: (err: any) => {},
    });
  };

  const handleSearchUser = useCallback(
    e => {
      setUserShare(e);
      search({
        value: e,
        uid: user.uid,
        onComplete: users => {
          if (users) {
            setUsersShare(users);
          }
        },
        onFail: err => {},
      });
    },
    [usersShare],
  );

  if (details === true) {
    return (
      <ResearchInfoDetails
        onBack={() => setDetails(false)}
        researchDetails={researchDetails}
      />
    );
  }
  return (
    <>
      <Header title="Pesquisa" back onBack={onBack} mode="common" />
      <Scroll>
        <BottomModal
          visible={modalShare}
          setVisible={setModalShare}
          user={userShare}
          uid={user.uid}
          research={researchId}
          users={usersShare}
          onSearch={e => handleSearchUser(e)}
        />
        {!!loading && (
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <ActivityIndicator size="large" color={Colors.blue} />
          </View>
        )}
        {!loading && (
          <>
            <Space vertical={8} />
            <Card style={{width: '100%'}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <View style={{flexDirection: 'column'}}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{width: 40, height: 40, borderRadius: 20}}>
                      <Image
                        source={{uri: researh.image}}
                        style={{
                          width: '100%',
                          height: '100%',
                          borderRadius: 999,
                        }}
                      />
                    </View>
                    <Space horizontal={4} />
                    <View>
                      <Text
                        title={researh.propertyName}
                        size={16}
                        weight={500}
                        color={Colors.secundaryText2}
                      />
                      <Text
                        title={`${researh.city}, ${researh.uf}`}
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
                      title={moment(researh.createDate).format('DD/MM/YYYY')}
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
                    {!!dataInfo && dataInfo.length !== 0 && (
                      <Text
                        title={`${dataInfo.length} ${
                          dataInfo.length === 1 ? 'área' : 'áreas'
                        }`}
                        weight={400}
                        size={15}
                        color={Colors.secundaryText2}
                      />
                    )}
                  </View>
                </View>
                <View style={{flexDirection: 'column', alignItems: 'center'}}>
                  <TouchableOpacity
                    style={{
                      backgroundColor: Colors.lightBlue,
                      width: 30,
                      height: 30,
                      borderRadius: 15,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    onPress={() => setModalShare(true)}>
                    <ShareIcon />
                  </TouchableOpacity>
                  <Space vertical={8} />
                  <TouchableOpacity
                    style={{
                      backgroundColor: Colors.lightBlue,
                      width: 30,
                      height: 30,
                      borderRadius: 15,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    onPress={() => handleRevomeResearch(researh.token)}>
                    <RemoveIcon />
                  </TouchableOpacity>
                </View>
              </View>
            </Card>
            <Space vertical={20} />
            <Card style={{width: '100%'}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                {Biomes.map(biome => {
                  if (biome.value === researh.biome) {
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
                {dataInfo.length !== 0 && (
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <TouchableOpacity
                      style={{
                        paddingVertical: 4,
                        paddingHorizontal: 10,
                        backgroundColor: Colors.lightBlue,
                        borderRadius: 99,
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}
                      onPress={() => {
                        setResearchDetails(dataInfo[position].info);
                        setDetails(true);
                      }}>
                      <VisibleIcon width="18px" height="18px" />
                      <Space horizontal={4} />
                      <Text
                        title="Mais detalhes"
                        size={12}
                        weight={600}
                        color={Colors.secundaryText2}
                      />
                    </TouchableOpacity>
                  </View>
                )}
              </View>

              <Space vertical={10} />
              {dataInfo.length !== 0 && (
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}>
                  {dataInfo.map((area, pos) => (
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
                        setLoadingInfo(true);
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

              {<Space vertical={4} />}
              {!!loadingInfo && (
                <View
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingVertical: 16,
                  }}>
                  <ActivityIndicator size="small" color={Colors.blue} />
                </View>
              )}
              {!loadingInfo && dataInfo.length !== 0 && (
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{width: '70%'}}>
                    <View style={{height: 20, marginVertical: 2.5}} />
                    <View style={{width: '100%'}}>
                      {dataInfo.length !== 0 &&
                        dataInfo.map(area => {
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
                    {!loadingInfo && areaTitle !== '' && dataInfo.length !== 0 && (
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
                          {!!dataInfo &&
                            dataInfo.length !== 0 &&
                            dataInfo.map(area => {
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
            </Card>
          </>
        )}
        <Space vertical={20} />
        {!loadingInfo && areaTitle !== '' && radarInfo.length !== 0 && (
          <RadarChart
            radarData={radarInfo[position]}
            loading={loadingInfo}
            title={areaTitle}
          />
        )}
      </Scroll>
    </>
  );
};

export default ResearchInfo;
