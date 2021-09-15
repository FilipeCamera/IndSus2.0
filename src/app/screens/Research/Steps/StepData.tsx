import {Colors} from '@styles';
import {Header, Scroll, Space, Text} from 'components';
import React from 'react';
import {TextInput, View} from 'react-native';

interface StepDataProps {
  title: string;
  setDados: any;
  data: any;
}

const StepData = ({title, setDados, data}: StepDataProps) => {
  return (
    <Scroll>
      <Header mode="common" title={title} back onBack={() => setDados(false)} />
      <Space vertical={20} />
      <View
        style={{
          padding: 16,
          borderWidth: 1,
          borderRadius: 20,
          borderStyle: 'dashed',
          borderColor: Colors.textGray,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          title="Observação"
          weight={600}
          size={18}
          color={Colors.textMediumBlack}
        />
        <Space vertical={4} />
        <Text
          title="O resultado precisa tá no intervalo de 0 - 10"
          weight={500}
          size={16}
          center
          color={Colors.textMediumBlack}
        />
      </View>
      <Space vertical={20} />
      {!!data &&
        data.map(item => (
          <>
            <View
              key={item.title}
              style={{
                borderBottomWidth: 1,
                borderColor: Colors.lightGray,
                width: '100%',
                padding: 8,
              }}>
              <Text
                title={item.title}
                weight={600}
                size={18}
                center
                color={Colors.textMediumBlack}
              />
            </View>
            <Space vertical={16} />
            <Text
              title={item.desc}
              weight={600}
              size={18}
              color={Colors.textMediumBlack}
            />
            {item.cri.map((itm, index) => {
              <View key={itm.title}>
                <View>
                  <View
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: 15,
                      backgroundColor: Colors.lightGray,
                    }}>
                    <Text
                      title={index + 1}
                      size={16}
                      weight={600}
                      color={Colors.background}
                    />
                  </View>
                  <Text
                    title={itm.title}
                    weight={600}
                    size={18}
                    color={Colors.textMediumBlack}
                  />
                </View>
                <View>
                  <TextInput
                    value={itm.value}
                    style={{
                      borderRadius: 8,
                      borderWidth: 1,
                      borderStyle: 'dashed',
                    }}
                  />
                </View>
              </View>;
            })}
          </>
        ))}
    </Scroll>
  );
};

export default StepData;
