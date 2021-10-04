import {Colors} from '@styles';
import {
  Button,
  Header,
  InputNota,
  Modals,
  Scroll,
  Space,
  Text,
} from 'components';
import {Reactotron} from 'firebase';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, KeyboardAvoidingView, TextInput, View} from 'react-native';

interface StepDataProps {
  title: string;
  setDados: any;
  dataForm: any;
  percent: string;
}

const StepData = ({title, setDados, dataForm, percent}: StepDataProps) => {
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const [complete, setComplete] = useState(0);


  useEffect(() => {
    let comp = 0;
    dataForm.map(item => {
      item.data.map(dta => {
        dta.cri.map(cr => {
          if(cr.value !== '') {
            comp = comp + 1
          }
          setTotal(total + (dta.cri.length + 1) * item.data.length)
        })
      })
    })
    setComplete(comp)
  }, []);

  useEffect(() => {
    if (complete > 0) {
      if (complete > total / 2) {
        percent.complete = 'Parcialmente completo';
      }
      else if (complete >= total) {
        percent.complete = 'Completo';
      }
      else if (complete < total / 2) {
        percent.complete = 'Incompleto';
      }
    } else {
      percent.complete = 'Sem preencher';
    }
  }, [complete]);

  useEffect(() => {
    const load = setTimeout(() => setLoading(false), 1000);
    return () => {
      clearInterval(load);
    };
  }, []);

  return (
    <KeyboardAvoidingView behavior="padding" style={{flex: 1}}>
    <Scroll>
      <Header
        mode="common"
        title={title}
        back
        onBack={() => {
          setDados(false);
        }}
      />
      {!!loading && (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
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
            dataForm.map((item, index) => (
              <>
                <View
                  key={item.indId}
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
                      key={dta.dataId}
                      title={dta.desc}
                      weight={600}
                      size={18}
                      center
                      color={Colors.textMediumBlack}
                    />
                    <Space vertical={4} />
                    {dta.cri.map((cr, index) => (
                      <View
                        key={cr.criId}
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          width: '90%',
                          marginVertical: 8,
                        }}>
                        <View
                          style={{flexDirection: 'row', alignItems: 'center'}}>
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
                              if (e === '') {
                                setComplete(complete - 1);
                              } else {
                                setComplete(complete + 1)
                              }
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
        </>
      )}
    </Scroll>
    </KeyboardAvoidingView>
  );
};

export default StepData;
