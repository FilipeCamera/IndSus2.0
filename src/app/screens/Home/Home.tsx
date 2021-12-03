import {Colors} from '@styles';
import {
  Board,
  Card,
  Header,
  RoundedButton,
  Scroll,
  Space,
  Text,
} from 'components';
import React, {useEffect, useState} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {Avatar} from 'react-native-paper';
import {useSelector} from 'react-redux';

import GraphIcon from 'assets/svg/graph.svg';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Home = ({navigation}: any) => {
  const user = useSelector((state: any) => state.auth.user);
  const research = useSelector((state: any) => state.research.research);
  const radar = useSelector((state: any) => state.radar);
  const [card, setCard] = useState(false);

  console.tron.log(research);
  useEffect(() => {
    if (Object.keys(research).length && Object.keys(radar).length !== 0) {
      setCard(true);
    }
  }, [research, radar]);
  return (
    <Scroll>
      <View style={{flex: 1, width: '100%', marginBottom: 40}}>
        <Header />
        {!!card && <Space vertical={15} />}
        {!!card && (
          <Card style={{width: '100%'}}>
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
                flexDirection: 'row',
                alignItems: 'center',
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
              <TouchableOpacity
                style={{
                  backgroundColor: Colors.blue,
                  width: 80,
                  height: 80,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 20,
                }}>
                <Text
                  title="Enviar"
                  size={14}
                  weight={600}
                  color={Colors.background}
                />
              </TouchableOpacity>
            </View>
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
        <Board title="Pesquisas" />
      </View>
      <RoundedButton onPress={() => navigation.navigate('Research')}>
        <Icon name="add" size={36} color={Colors.background} />
      </RoundedButton>
    </Scroll>
  );
};

export default Home;
