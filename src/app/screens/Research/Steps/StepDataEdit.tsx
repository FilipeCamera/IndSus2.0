import {Colors} from '@styles';
import {
  Button,
  Header,
  InputNota,
  RadarChartInd,
  Scroll,
  Space,
  Text,
} from 'components';

import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  TextInput,
  View,
} from 'react-native';

interface StepDataProps {
  title: string;
  setDadosEdit: any;
  dataForm: any;
  percent: string;
  info: any;
  setInfo: any;
  quantInd: number;
}

const StepDataEdit = ({
  title,
  setDadosEdit,
  dataForm,
  quantInd,
}: StepDataProps) => {
  const [loading, setLoading] = useState(true);
  const [radar, setRadar] = useState(false);
  const [data, setData] = useState<any[]>([]);

  const generateGraph = () => {
    const array: any = [];
    dataForm.map(item => {
      item.data.map(data => {
        let result =
          (Number(data.cri[0].value) +
            Number(data.cri[1].value) +
            Number(data.cri[2].value)) /
          data.cri.length;

        array.push({
          value: result.toFixed(2),
          sigla: data.desc.substr(0, 4).replace('-', '').trim(),
        });
      });
    });

    setData(array);
  };

  useEffect(() => {
    const load = setTimeout(() => setLoading(false), 1000);
    return () => {
      clearInterval(load);
    };
  }, []);

  useEffect(() => {
    if (data.length !== 0) {
      setRadar(true);
    }
  }, [data]);

  return (
    <KeyboardAvoidingView behavior="padding" style={{flex: 1}}>
      <Scroll>
        <Header
          mode="common"
          title={title}
          back
          onBack={() => {
            setDadosEdit(false);
          }}
        />
        {!!loading && (
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <ActivityIndicator size={46} color={Colors.blue} />
          </View>
        )}
        {!loading && (
          <>
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
            {!!dataForm &&
              dataForm.map((item, indexData) => (
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
                  {item.data.map(dta => (
                    <>
                      <Text
                        title={dta.desc}
                        weight={600}
                        size={18}
                        center
                        color={Colors.textMediumBlack}
                      />
                      <Space vertical={4} />
                      {dta.cri.map((cr, index) => (
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            width: '90%',
                            marginVertical: 8,
                          }}>
                          <View
                            style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                            }}>
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
                            <InputNota
                              valor={cr.value}
                              onText={e => {
                                cr.value = e;
                              }}
                            />
                          </View>
                        </View>
                      ))}

                      <Space vertical={20} />
                    </>
                  ))}
                </>
              ))}
            {!radar && quantInd > 2 && (
              <View style={{width: '100%'}}>
                <Button
                  title="Gerar Gráfico"
                  size={15}
                  weight={600}
                  color={Colors.background}
                  shadow={4}
                  onPress={() => generateGraph()}
                />
              </View>
            )}
            {!!radar && data.length !== 0 && (
              <RadarChartInd radarData={data} title={title} />
            )}
          </>
        )}
      </Scroll>
    </KeyboardAvoidingView>
  );
};

export default StepDataEdit;
