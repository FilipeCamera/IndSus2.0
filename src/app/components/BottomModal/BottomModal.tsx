import {Colors} from '@styles';
import {Button, Scroll, Search, Space, Text} from 'components';
import React from 'react';
import {Dimensions, View} from 'react-native';
import {Portal, Modal} from 'react-native-paper';

interface BottomModalProps {
  visible: boolean;
  user: string;
  users: any[];
  setVisible: any;
  onFuction: (e: string) => any;
  onFuctionTwo: () => any;
}

const {width, height} = Dimensions.get('window');

const BottomModal = ({
  user,
  users,
  visible,
  setVisible,
  onFuction,
  onFuctionTwo,
}: BottomModalProps) => {
  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={() => setVisible(false)}
        contentContainerStyle={{
          backgroundColor: Colors.background,
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          padding: 16,
          position: 'absolute',
          bottom: 0,
          height: height - 80,
          width: width,
        }}>
        <View style={{flex: 1, paddingTop: 10}}>
          <Text
            title="Usuários"
            size={16}
            weight={700}
            color={Colors.textBlack}
            center
          />
          <Space vertical={10} />
          <Search value={user} onText={e => onFuction(e)} />
          <Scroll>
            {!!users &&
              users.length !== 0 &&
              users.map(user => (
                <View
                  key={user.uid}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                  }}>
                  <Text
                    title={user.name}
                    size={14}
                    weight={500}
                    color={Colors.textMediumBlack}
                  />
                  <Button
                    background={Colors.blue}
                    title="Enviar"
                    size={12}
                    weight={500}
                    color={Colors.background}
                    shadow={2}
                    onPress={() => {}}
                  />
                </View>
              ))}
          </Scroll>
          <View style={{position: 'absolute', bottom: 10, alignSelf: 'center'}}>
            <Button
              mode="text"
              title="Cancelar"
              color={Colors.blue}
              size={15}
              weight={600}
              onPress={() => setVisible(false)}
            />
          </View>
        </View>
      </Modal>
    </Portal>
  );
};

export default BottomModal;
