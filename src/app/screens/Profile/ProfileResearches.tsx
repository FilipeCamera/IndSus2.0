import {Colors} from '@styles';
import {Button, Header, Scroll, Space, Text} from 'components';
import {useGetUser, useRadarDataArea, useResearch} from 'hooks';
import moment from 'moment';
import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import VisibleIcon from 'assets/svg/visible.svg';

interface ProfileResearchesProps {
  setState: any;
  share: any[];
}

const ProfileResearches = ({setState, share}: ProfileResearchesProps) => {
  const [researches, setResearches] = useState<any[]>([]);
  const {getUser} = useGetUser();
  const {getResearchById} = useResearch();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    share.map(item => {
      getResearchById({
        uid: item.research,
        onComplete: (research: any) => {
          if (research) {
            getUser({
              uid: item.from,
              onComplete: (user: any) => {
                if (user) {
                  setResearches([{user, research}]);
                }
              },
              onFail: err => {},
            });
          }
        },
        onFail: err => {},
      });
    });
    return () => {
      setResearches([]);
      setLoading(true);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const renderItem = ({item}: any) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <View style={{width: 60, height: 60, borderRadius: 30}}>
          <Image
            source={{uri: item.research.image}}
            style={{width: '100%', height: '100%', borderRadius: 9999}}
          />
        </View>
        <View>
          <Text title={item.research.propertyName} size={16} weight={600} />
          <Text
            title={`${item.research.city}, ${item.research.uf}`}
            size={14}
            weight={400}
          />
          <View
            style={{
              backgroundColor: Colors.lightBlue,
              borderRadius: 5,
              padding: 2.5,
              maxWidth: 90,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 6,
            }}>
            <Text
              title={moment.unix(item.research.createDate).format('DD/MM/YYYY')}
              size={15}
              weight={600}
              color={Colors.blue}
            />
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={{
              backgroundColor: Colors.lightBlue2,
              width: 40,
              height: 40,
              borderRadius: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => {}}>
            <VisibleIcon />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.background,
        padding: 16,
        alignItems: 'center',
      }}>
      <Header
        title="Pesquisas Recebidas"
        mode="common"
        alert
        back
        onBack={() => setState('')}
      />
      <Space vertical={16} />
      {!loading && researches.length === 0 && (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Icon name="alert" size={64} color={Colors.lightGray} />
          <Text
            title="Nenhuma pesquisa recebida"
            size={18}
            weight={500}
            color={Colors.lightGray}
          />
        </View>
      )}
      <FlatList
        data={researches}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default ProfileResearches;
