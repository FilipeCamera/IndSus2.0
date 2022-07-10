import {Colors} from '@styles';
import {
  Button,
  Card,
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
  BackHandler,
  KeyboardAvoidingView,
  TextInput,
  View,
} from 'react-native';

interface StepDataProps {
  title: string;
  setDados: any;
  dataForm: any;
  quantInd: number;
}

const DetailsInfo = ({title, setDados, dataForm, quantInd}: StepDataProps) => {
  const [loading, setLoading] = useState(true);
  const [radar, setRadar] = useState(false);
  const [data, setData] = useState<any[]>([]);

  const backChange = () => {
    setDados(false);
    return true;
  };
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backChange,
    );
    return () => backHandler.remove();
  }, []);
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
    <View style={{flex: 1, backgroundColor: Colors.background}}>
      <Header
        mode="common"
        alert
        back
        onBack={() => setDados(false)}
        title="Pesquisas recebidas"
      />
      <Scroll>
        {!!loading && (
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <ActivityIndicator size="large" color={Colors.blue} />
          </View>
        )}
        {!loading && (
          <>
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
                  {item.data.map((dta, dtaIndex) => (
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
                            <View
                              style={{
                                borderRadius: 8,
                                borderWidth: 1,
                                borderStyle: 'dashed',
                                width: 80,
                                height: 42,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderColor: Colors.secundaryTextGray,
                              }}>
                              <Text title={cr.value} weight={600} size={16} />
                            </View>
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
    </View>
  );
};

export default DetailsInfo;
