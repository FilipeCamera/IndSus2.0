import {Colors} from '@styles';
import {Button, Header, InputNota, Scroll, Space, Text} from 'components';
import { Reactotron } from 'firebase';
import React, { useState } from 'react';
import {TextInput, View} from 'react-native';

interface StepDataProps {
  title: string;
  setDados: any;
  data: any;
}

const StepData = ({title, setDados, data}: StepDataProps) => {
  const [stepDados, setStepDados] = useState(data);
  const [dataForm, setDataForm] = useState([]);
  console.tron.log(stepDados);
  console.tron.log(dataForm);
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
      {!!stepDados &&
        stepDados.map((item, index) => (
          <>
            <View
              key={index}
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
            {item.data.map((dta, index) => (
              <>
                <Text
                key={index}
                  title={dta.desc}
                  weight={600}
                  size={18}
                  center
                  color={Colors.textMediumBlack}
                />
                <Space vertical={4} />
                {dta.cri.map((cr, index) => (
                  <View
                    key={index}
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      width: '90%',
                      marginVertical: 8,
                    }}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <View
                        style={{
                          width: 30,
                          height: 30,
                          borderRadius: 15,
                          backgroundColor: Colors.textGray,
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <Text
                          title={index + 1}
                          size={16}
                          weight={600}
                          color={Colors.background}
                        />
                      </View>
                      <Space horizontal={5} />
                      <View style={{width: 140}}>
                        <Text
                          title={cr.title}
                          weight={600}
                          size={15}
                          color={Colors.textMediumBlack}
                        />
                      </View>
                    </View>
                    <View>
                      <InputNota setDataForm={setDataForm} dataForm={dataForm} item={item} itemDta={dta} itemCr={cr}/>
                    </View>
                  </View>
                ))}
                <Space vertical={20} />
              </>
            ))}
          </>
        ))}
      <View style={{width: '100%'}}>
        <Button
          title="Concluir"
          weight={600}
          shadow={4}
          size={16}
          color={Colors.background}
        />
      </View>
    </Scroll>
  );
};

export default StepData;
