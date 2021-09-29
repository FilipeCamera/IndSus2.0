import indicators from '@indicators';
import {Colors} from '@styles';
import {Button, Header, Modals, Scroll, Space, Text} from 'components';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, TouchableOpacity, View} from 'react-native';
import {Modal, Portal, ProgressBar} from 'react-native-paper';
import StepData from './StepData';

interface StepTwoProps {
  setState: any;
  area: number;
  setArea: any;
}

const Step2 = ({setState, setArea, area}: StepTwoProps) => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [dataForm, setDataForm] = useState([]);
  const [dados, setDados] = useState(false);
  const [title, setTitle] = useState('');
  const [count, setCount] = useState(0);
  const [countForm, setCountForm] = useState(0);

  useEffect(() => {
    indicators.map(indicator => {
      indicator.data.map(data => {
        data.ind.map(cri => {
          cri.data.map(cr => {
            cr.cri.map(item => {
              if(item.value === '') {
                setCount(count + 1)
              }
            })
          })
        })
      })
    })
  }, [])

  useEffect(() => {
    indicators.map(indicator => {
      indicator.data.map(data => {
        data.ind.map(cri => {
          cri.data.map(cr => {
            cr.cri.map(item => {
              if(item.value === '') {
                setCountForm(countForm + 1)
              }
            })
          })
        })
      })
    })
  }, [indicators])

  useEffect(() => {
    const load = setTimeout(() => setLoading(false), 1000)
    return () => {
      clearInterval(load)
    }
  }, [])

  if (dados === true) {
    return (
      <StepData 
        title={title} 
        setDados={setDados} 
        dataForm={dataForm} 
      />
    );
  }
  return (
    <Scroll>
      <Modals 
        visible={visible} 
        setVisible={setVisible} 
        title="Deseja realmente sair?" 
        desc="Caso queira sair, os dados preenchidos serão perdidos"
        textCancel="Cancelar"
        textOk="Sair"
        onFunction={() => {
          setArea(area -1)
          setState('research')
        }}/>
      <Header
        mode="common"
        title="Dados"
        back
        onBack={() => {
          setVisible(!visible);
        }}
      />
      <Space vertical={20} />
      {!!loading && <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}><ActivityIndicator size={46} color={Colors.blue}/></View>}
      {!loading && indicators.map((indicator, index) => (
        <>
          <View
            key={indicator.indId}
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
              size={18}
              weight={700}
              color={Colors.textSecundaryBlack}
            />
          </View>
          <Space vertical={16} />
          {indicator.data.map((item, index)  => (
            <TouchableOpacity
              key={item.dataId}
              style={{
                borderWidth: 1,
                borderStyle: 'dashed',
                borderColor: Colors.textGray,
                borderRadius: 20,
                width: '100%',
                padding: 16,
                marginBottom: 32,
              }}
              onPress={() => {
                setDataForm(item.ind);
                setTitle(item.title);
                setDados(!dados);
              }}>
              <Text
                title={item.title}
                size={18}
                weight={700}
                color={Colors.textGray}
              />
              <Space vertical={8} />
              {item.desc.map((ind, index) => (
                <Text
                  key={ind.descId}
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
                    progress={0}
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
          <Space vertical={15} />
        </>
      ))}
      {!loading && (
        <>
          <View style={{width: '100%'}}>
            <Button
              background={Colors.blue}
              title="Concluir"
              weight={600}
              size={15}
              shadow={4}
              color={Colors.background}
            />
          </View>
          <Space vertical={4} />
        </>
      )}
    </Scroll>
  );
};

export default Step2;
