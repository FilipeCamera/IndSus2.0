import indicators from '@indicators';
import {Colors} from '@styles';
import {Header, Scroll, Space, Text} from 'components';
import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Modal, Portal, ProgressBar} from 'react-native-paper';

interface StepTwoProps {
  setState: any;
  area: number;
  setArea: any;
}

const Step2 = ({setState, setArea, area}: StepTwoProps) => {
  const [visible, setVisible] = useState(false);

  return (
    <Scroll>
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
            title="Deseja realmente sair?"
            size={18}
            weight={600}
            color={Colors.textBlack}
          />
          <Space vertical={4} />
          <Text
            title="Caso queira sair, os dados preenchidos serão perdidos."
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
                title="Cancelar"
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
              onPress={() => {
                setArea(area - 1);
                setState('research');
              }}>
              <Text
                title="Sair"
                size={15}
                weight={700}
                center
                color={Colors.background}
              />
            </TouchableOpacity>
          </View>
        </Modal>
      </Portal>
      <Header
        mode="common"
        title="Dados"
        back
        onBack={() => {
          setVisible(!visible);
        }}
      />
      <Space vertical={20} />
      {indicators.map(indicator => (
        <>
          <View
            key={indicator.title}
            style={{
              borderBottomWidth: 1,
              width: '100%',
              padding: 8,
              alignItems: 'center',
              justifyContent: 'center',
              borderBottomColor: Colors.lightGray,
            }}>
            <Text
              title={indicator.title}
              size={16}
              weight={700}
              color={Colors.textSecundaryBlack}
            />
          </View>
          <Space vertical={16} />
          {indicator.data.map(item => (
            <TouchableOpacity
              key={item.title}
              style={{
                borderWidth: 1,
                borderStyle: 'dashed',
                borderColor: Colors.textGray,
                borderRadius: 20,
                width: '100%',
                padding: 16,
                marginBottom: 32,
              }}>
              <Text
                title={item.title}
                size={18}
                weight={700}
                color={Colors.textGray}
              />
              <Space vertical={8} />
              {item.ind.map(ind => (
                <Text
                  title={`${ind.title} - ${ind.quant}`}
                  size={16}
                  weight={500}
                  color={Colors.textGray}
                />
              ))}
              <Space vertical={8} />
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <View style={{width: '85%'}}>
                  <ProgressBar
                    progress={0.05}
                    color={Colors.textGray}
                    style={{borderRadius: 4, height: 8}}
                  />
                </View>
                <Text
                  title="0%"
                  size={22}
                  weight={700}
                  color={Colors.textGray}
                />
              </View>
            </TouchableOpacity>
          ))}
        </>
      ))}
    </Scroll>
  );
};

export default Step2;
