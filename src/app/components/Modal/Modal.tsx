import { Colors } from '@styles';
import { Space, Text } from 'components';
import React from 'react'
import { TouchableOpacity, View } from 'react-native';
import { Portal, Modal } from 'react-native-paper';

interface ModalProps {
  visible: boolean;
  setVisible: any;
  onFunction: () => any;
  title: string;
  desc: string;
  textCancel: string;
  textOk: string;
}

const Modals = ({visible, setVisible, onFunction, title, desc, textCancel, textOk}: ModalProps) => {
  return (
    <Portal>
        <Modal
          visible={visible}
          onDismiss={() => setVisible(!visible)}
          contentContainerStyle={{
            backgroundColor: Colors.background,
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 36,
            borderRadius: 20,
          }}>
          <Space vertical={8} />
          <Text
            title={title}
            size={18}
            weight={600}
            color={Colors.textBlack}
          />
          <Space vertical={4} />
          <Text
            title={desc}
            size={15}
            weight={500}
            center
            color={Colors.textSecundaryBlack}
          />
          <Space vertical={15} />
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              style={{
                width: '50%',
                height: 42,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => setVisible(!visible)}>
              <Text
                title={textCancel}
                size={15}
                weight={500}
                center
                color={Colors.blue}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: Colors.blue,
                width: '50%',
                height: 42,
                alignItems: 'center',
                justifyContent: 'center',
                borderBottomEndRadius: 20,
              }}
              onPress={onFunction}>
              <Text
                title={textOk}
                size={15}
                weight={700}
                center
                color={Colors.background}
              />
            </TouchableOpacity>
          </View>
        </Modal>
      </Portal>
  )
}

export default Modals