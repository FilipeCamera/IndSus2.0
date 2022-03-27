import {Colors} from '@styles';
import {Header, Scroll, Text} from 'components';
import {useGetUser, useResearch} from 'hooks';
import React, {useState, useEffect} from 'react';
import {ActivityIndicator, View} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

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
                  setResearches([...researches, {user, research}]);
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

  return (
    <Scroll>
      <Header
        title="Pesquisas Recebidas"
        mode="common"
        alert
        back
        onBack={() => setState('')}
      />
      {!!loading && (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <ActivityIndicator size="large" color={Colors.blue} />
        </View>
      )}
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
      {!loading &&
        researches.length !== 0 &&
        researches.map(item => {
          return (
            <View>
              <Text title={item.research.propertyName} size={14} weight={500} />
            </View>
          );
        })}
    </Scroll>
  );
};

export default ProfileResearches;
