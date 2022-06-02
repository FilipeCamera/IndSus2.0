import React, {useState, useEffect} from 'react';
import {ActivityIndicator, Image, View} from 'react-native';
import {Colors} from '@styles';
import {Header, Scroll, Space, Text} from 'components';
import Icon from 'react-native-vector-icons/Ionicons';
import {useResearch} from 'hooks';
import {useSelector} from 'react-redux';
import {ButtonResearch, ResearchBoxContainer} from './styles';
import Line from 'assets/svg/line.svg';
import moment from 'moment';
import ResearchInfo from './Info/ResearchInfo';
import Biomes from '@biomes';
import {useNetInfo} from '@react-native-community/netinfo';

moment.updateLocale('pt', {
  months: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ],
});

const Researches = () => {
  const user = useSelector((state: any) => state.auth.user);
  const [loading, setLoading] = useState<boolean>(true);
  const [researches, setResearches] = useState<any[]>([]);
  const connection = useNetInfo();
  const {getResearchesByUser} = useResearch();
  const [research, setResearch] = useState<any>();
  const [info, setInfo] = useState<boolean>(false);

  const handleResearch = (item: any) => {
    setResearch(item);
    setInfo(true);
  };

  useEffect(() => {
    if (connection.isConnected && connection.isInternetReachable) {
      getResearchesByUser({
        userId: user.uid,
        onComplete: (res: any) => {
          if (res) {
            res.sort(function (item, item2) {
              if (
                moment.unix(item.research.createDate).format('DD/MM/YYYY') <
                moment.unix(item2.research.createDate).format('DD/MM/YYYY')
              ) {
                return 1;
              }
              if (
                moment.unix(item.research.createDate).format('DD/MM/YYYY') >
                moment.unix(item2.research.createDate).format('DD/MM/YYYY')
              ) {
                return -1;
              }
              if (
                moment.unix(item.research.createDate).format('DD/MM/YYYY') ===
                moment.unix(item2.research.createDate).format('DD/MM/YYYY')
              ) {
                return 0;
              }
            });
            setResearches(res);
            setLoading(false);
          }
        },
        onFail: (err: any) => {},
      });

      return () => {
        setResearches([]);
        setLoading(true);
      };
    } else {
      setTimeout(() => setLoading(false), 1000);
    }
  }, [connection.isConnected, connection.isInternetReachable]);

  if (info) {
    return <ResearchInfo researh={research} onBack={() => setInfo(false)} />;
  }
  return (
    <Scroll>
      <Header mode="avatar" />
      {!!loading && (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <ActivityIndicator size="large" color={Colors.blue} />
        </View>
      )}
      {!loading && !connection.isConnected && !connection.isInternetReachable && (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Icon name="alert" size={64} color={Colors.lightGray} />
          <Text
            title="Sem conexão com internet"
            size={18}
            weight={500}
            color={Colors.lightGray}
          />
        </View>
      )}
      {!loading &&
        !!connection.isConnected &&
        !!connection.isInternetReachable &&
        researches.length === 0 && (
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Icon name="alert" size={64} color={Colors.lightGray} />
            <Text
              title="Nenhuma pesquisa encontrada"
              size={18}
              weight={500}
              color={Colors.lightGray}
            />
          </View>
        )}
      {!loading &&
        !!connection.isConnected &&
        !!connection.isInternetReachable &&
        researches.length !== 0 && <Space vertical={20} />}
      {!loading &&
        !!connection.isConnected &&
        !!connection.isInternetReachable &&
        researches.length !== 0 &&
        researches.map(item => (
          <ResearchBoxContainer key={item.id}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  backgroundColor: Colors.lightBlue2,
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingVertical: 5,
                  borderRadius: 12,
                  width: 90,
                }}>
                <Text
                  title={moment
                    .unix(item.research.createDate.seconds)
                    .format('MMMM - YYYY')}
                  size={10}
                  weight={600}
                  color={Colors.blue}
                />
              </View>
              <Space horizontal={4} />
              {Biomes.map(biome => {
                if (biome.value === item.research.biome) {
                  return (
                    <View
                      style={{
                        backgroundColor: Colors.lightBlue2,
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingVertical: 5,
                        borderRadius: 12,
                        width: 90,
                      }}>
                      <Text
                        title={item.research.biome}
                        size={10}
                        weight={600}
                        color={biome.color}
                      />
                    </View>
                  );
                }
              })}
            </View>
            <Space vertical={5} />
            <ButtonResearch onPress={() => handleResearch(item.research)}>
              <View
                style={{
                  flexDirection: 'column',
                  width: '100%',
                  paddingLeft: 20,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text
                      title="Dia"
                      size={12}
                      weight={600}
                      color={Colors.textGray2}
                    />
                    <Space vertical={2} />
                    <View
                      style={{
                        width: 35,
                        height: 35,
                        borderRadius: 17.5,
                        backgroundColor: Colors.lightBlue2,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Text
                        title={moment
                          .unix(item.research.createDate)
                          .format('DD')}
                        size={16}
                        weight={600}
                        color={Colors.blue}
                      />
                    </View>
                  </View>
                  <Space horizontal={6} />
                  <View
                    style={{
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                    }}>
                    <Text
                      title={item.research.propertyName}
                      size={16}
                      weight={600}
                      color={Colors.textMediumBlack}
                    />
                    <Text
                      title={`${item.research.city}, ${item.research.uf}`}
                      size={14}
                      weight={500}
                      color={Colors.textGray}
                    />
                  </View>
                </View>
              </View>

              <Line style={{position: 'absolute', bottom: -10}} />
            </ButtonResearch>
          </ResearchBoxContainer>
        ))}
    </Scroll>
  );
};

export default Researches;
