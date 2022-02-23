import {Colors} from '@styles';
import {Button, Scroll, Search, Space, Text} from 'components';
import React from 'react';
import {Dimensions, Image, View} from 'react-native';
import {Portal, Modal} from 'react-native-paper';
import {ButtonShare} from './styles';

import ShareIcon from 'assets/svg/telegram.svg';
import LineIcon from 'assets/svg/line.svg';
import {firestore} from 'firebase';
import {showMessage} from 'react-native-flash-message';

interface BottomModalProps {
  visible: boolean;
  user: string;
  uid: string;
  research: string;
  users: any[];
  setVisible: any;
  onSearch: (e: string) => any;
}

const {width, height} = Dimensions.get('window');

const BottomModal = ({
  user,
  users,
  uid,
  research,
  visible,
  setVisible,
  onSearch,
}: BottomModalProps) => {
  const handleShareResearch = async (
    researchId: string,
    userShareId: string,
    userId: string,
  ) => {
    await firestore()
      .collection('shares')
      .doc()
      .set({
        research: researchId,
        to: userShareId,
        from: userId,
      })
      .catch(err => {
        if (err) {
          showMessage({
            type: 'warning',
            message: 'Não foi possível enviar, tente novamente',
            description: 'Ocorreu um problema ao compartilhar sua pesquisa',
          });
        }
      })
      .finally(() => {
        setVisible(false);
        showMessage({
          type: 'success',
          message: 'Enviado',
          description: 'Sua pesquisa foi compartilhada',
        });
      });
  };
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
          <Search value={user} onText={e => onSearch(e)} />
          <Space vertical={8} />
          <Scroll noPadding>
            {!!users &&
              users.length !== 0 &&
              users.map(user => (
                <View
                  key={user.uid}
                  style={{
                    flexDirection: 'column',
                    width: '100%',
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: 8,
                    }}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <View style={{width: 50, height: 50, borderRadius: 25}}>
                        <Image
                          source={{uri: user.avatar}}
                          style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: 999,
                          }}
                        />
                      </View>
                      <Space horizontal={4} />
                      <View style={{flexDirection: 'column'}}>
                        <Text
                          title={user.name}
                          size={16}
                          weight={700}
                          color={Colors.textMediumBlack}
                        />
                        <Text
                          title={user.work}
                          size={14}
                          weight={500}
                          color={Colors.textGray}
                        />
                      </View>
                    </View>
                    <ButtonShare
                      onPress={() =>
                        handleShareResearch(research, user.uid, uid)
                      }>
                      <ShareIcon />
                      <Space horizontal={4} />
                      <Text
                        title="Enviar"
                        size={12}
                        weight={600}
                        color={Colors.background}
                      />
                    </ButtonShare>
                  </View>
                  <LineIcon />
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
