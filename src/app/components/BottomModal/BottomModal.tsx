import {Colors} from '@styles';
import {Text} from 'components';
import React from 'react';
import {Portal, Modal} from 'react-native-paper';

interface BottomModalProps {
  visible: boolean;
  setVisible: any;
  onFuction: () => any;
}

const BottomModal = ({visible, setVisible, onFuction}: BottomModalProps) => {
  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={() => setVisible(false)}
        contentContainerStyle={{backgroundColor: Colors.background}}>
        <Text title="Compartilhar" />
      </Modal>
    </Portal>
  );
};

export default BottomModal;
