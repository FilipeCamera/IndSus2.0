import React, {useState, useEffect} from 'react';
import {ActivityIndicator, Image, View} from 'react-native';
import {Colors} from '@styles';
import {Header, Scroll, Space, Text} from 'components';
import Icon from 'react-native-vector-icons/Ionicons';
import {useResearch} from 'hooks';
import {useSelector} from 'react-redux';
import {ButtonResearchCircle, ResearchBoxContainer} from './styles';
import Line from 'assets/svg/line.svg';
import Trash from 'assets/svg/trash.svg';
import Visible from 'assets/svg/visible.svg';
import Share from 'assets/svg/share.svg';

const Researches = () => {
  const user = useSelector((state: any) => state.auth.user);
  const [loading, setLoading] = useState<boolean>(true);
  const [researches, setResearches] = useState<any[]>([]);
  const {getResearchesByUser} = useResearch();
  useEffect(() => {
    getResearchesByUser({
      userId: user.uid,
      onComplete: (res: any) => {
        if (res) {
          setResearches(res);
          setLoading(false);
        }
      },
      onFail: (err: any) => {},
    });
  }, []);
  return (
    <Scroll>
      <Header mode="avatar" />
      {!!loading && (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <ActivityIndicator size="large" color={Colors.blue} />
        </View>
      )}
      {!loading && researches.length === 0 && (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Icon name="alert" size={64} color={Colors.lightGray} />
          <Text
            title="Nenhuma pesquisa encontrada"
            size={18}
            weight={500}
            color={Colors.lightGray}
          />
        </View>
      )}
      {!loading && researches.length !== 0 && <Space vertical={20} />}
      {!loading &&
        researches.length !== 0 &&
        researches.map(item => (
          <ResearchBoxContainer key={item.id}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View style={{width: 50, height: 50, borderRadius: 25}}>
                <Image
                  source={{uri: item.research.image}}
                  style={{width: '100%', height: '100%', borderRadius: 999}}
                />
              </View>
              <Space horizontal={4} />
              <View>
                <Text
                  title={item.research.propertyName}
                  size={16}
                  weight={600}
                  color={Colors.textMediumBlack}
                />
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text
                    title={item.research.city}
                    size={14}
                    weight={500}
                    color={Colors.textGray}
                  />
                  <Text
                    title=","
                    size={14}
                    weight={500}
                    color={Colors.textGray}
                  />
                  <Space horizontal={1} />
                  <Text
                    title={item.research.uf}
                    size={14}
                    weight={500}
                    color={Colors.textGray}
                  />
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View>
                <ButtonResearchCircle onPress={() => {}}>
                  <Visible />
                </ButtonResearchCircle>
              </View>
              <Space vertical={2} />
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <ButtonResearchCircle onPress={() => {}}>
                  <Trash />
                </ButtonResearchCircle>
                <Space horizontal={4} />
                <ButtonResearchCircle onPress={() => {}}>
                  <Share />
                </ButtonResearchCircle>
              </View>
            </View>
            <Line
              style={{position: 'absolute', bottom: 0, alignSelf: 'center'}}
            />
          </ResearchBoxContainer>
        ))}
    </Scroll>
  );
};

export default Researches;
