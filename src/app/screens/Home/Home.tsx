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
import React from 'react';
import {View} from 'react-native';
import {Avatar} from 'react-native-paper';
import {useSelector} from 'react-redux';

import GraphIcon from 'assets/svg/graph.svg';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Home = ({navigation}: any) => {
  const user = useSelector((state: any) => state.auth.user);
  return (
    <Scroll>
      <Header />
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
      <RoundedButton onPress={() => navigation.navigate('Research')}>
        <Icon name="add" size={36} color={Colors.background} />
      </RoundedButton>
    </Scroll>
  );
};

export default Home;
