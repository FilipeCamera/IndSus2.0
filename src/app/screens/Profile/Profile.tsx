import {Colors} from '@styles';
import {Header, Space, Card, Text} from 'components';
import React from 'react';
import {View} from 'react-native';
import {Avatar} from 'react-native-paper';

import GraphIcon from 'assets/svg/graph.svg';
import {useSelector} from 'react-redux';

const Profile = () => {
  const user = useSelector((state: any) => state.auth.user);
  return (
    <View style={{backgroundColor: Colors.background, padding: 16, flex: 1}}>
      <Header mode="profile" alert />
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
    </View>
  );
};

export default Profile;
