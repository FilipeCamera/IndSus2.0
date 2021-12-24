import React, {useState, useEffect} from 'react';
import {ActivityIndicator, Image, View} from 'react-native';
import {Colors} from '@styles';
import {Header, Scroll, Space, Text} from 'components';
import Icon from 'react-native-vector-icons/Ionicons';
import {useResearch} from 'hooks';
import {useSelector} from 'react-redux';
import {
  ButtonResearch,
  ButtonResearchCircle,
  ResearchBoxContainer,
} from './styles';
import Line from 'assets/svg/line.svg';
import Trash from 'assets/svg/trash.svg';
import Visible from 'assets/svg/visible.svg';
import Share from 'assets/svg/share.svg';
import moment from 'moment';

const Researches = () => {
  moment.locale('pt-br');
  const user = useSelector((state: any) => state.auth.user);
  const [loading, setLoading] = useState<boolean>(true);
  const [researches, setResearches] = useState<any[]>([]);
  const {getResearchesByUser} = useResearch();
  const meses = [
    {br: 'Janeiro', us: 'January'},
    {br: 'Fevereiro', us: 'February'},
    {br: 'Março', us: 'March'},
    {br: 'Abril', us: 'April'},
    {br: 'Maio', us: 'May'},
    {br: 'Junho', us: 'June'},
    {br: 'Julho', us: 'Jaly'},
    {br: 'Agosto', us: 'August'},
    {br: 'Setembro', us: 'September'},
    {br: 'Outubro', us: 'October'},
    {br: 'Novembro', us: 'November'},
    {br: 'Dezembro', us: 'December'},
  ];

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
        meses.map(mes => {
          return (
            <View>
              <View
                style={{
                  borderBottomWidth: 1,
                  borderColor: Colors.lightGray,
                  padding: 5,
                }}>
                <Text
                  title={mes.br}
                  size={18}
                  weight={600}
                  color={Colors.textGray2}
                  center
                />
              </View>

              {researches.map(item => {
                if (
                  moment
                    .unix(item.research.createDate.seconds)
                    .format('MMMM') === mes.us
                ) {
                  return (
                    <ResearchBoxContainer key={item.id}>
                      <ButtonResearch>
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
                              borderRadius: 999,
                              backgroundColor: Colors.lightBlue2,
                              alignItems: 'center',
                              justifyContent: 'center',
                              padding: 8,
                            }}>
                            <Text
                              title={moment
                                .unix(item.research.createDate.seconds)
                                .format('DD')}
                              size={14}
                              weight={600}
                              color={Colors.blue}
                            />
                          </View>
                        </View>
                        <Space horizontal={8} />
                        <View
                          style={{flexDirection: 'row', alignItems: 'center'}}>
                          <View>
                            <Text
                              title={item.research.propertyName}
                              size={16}
                              weight={600}
                              color={Colors.textMediumBlack}
                            />
                            <View
                              style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                              }}>
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
                      </ButtonResearch>
                      <Line
                        style={{
                          position: 'absolute',
                          bottom: 0,
                          alignSelf: 'center',
                        }}
                      />
                    </ResearchBoxContainer>
                  );
                }
              })}
              <Space vertical={8} />
            </View>
          );
        })}
    </Scroll>
  );
};

export default Researches;
