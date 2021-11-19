import {Colors} from '@styles';
import {Button, Header, Modals, Scroll, Space, Text} from 'components';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, TouchableOpacity, View} from 'react-native';
import {Modal, Portal, ProgressBar} from 'react-native-paper';
import StepDataEdit from './StepDataEdit';

interface StepEditProps {
  setState: any;
  setDataRadar: any;
  dataRadar: any[];
  dataAreaSelected: any[];
  position: number;
}

const StepEdit = ({
  setState,
  dataAreaSelected,
  setDataRadar,
  dataRadar,
  position,
}: StepEditProps) => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [dadosEdit, setDadosEdit] = useState(false);
  const [title, setTitle] = useState('');
  const [dataForm, setDataForm] = useState([]);
  const [info, setInfo] = useState<any[]>(dataAreaSelected);

  const setLoadRadarInfo = async () => {
    const array: any = [];

    info.map(inf => {
      inf.data.map((data: any) => {
        data.ind.map((ind: any) => {
          ind.data.map((indData: any) => {
            let result =
              (Number(indData.cri[0].value) +
                Number(indData.cri[1].value) +
                Number(indData.cri[2].value)) /
              indData.cri.length;

            array.push({[indData.sigla]: result.toFixed(2)});
          });
        });
      });
    });

    if (array.length !== 0) {
      dataRadar[position] = array;
      setState('research');
    }
  };

  useEffect(() => {
    const load = setTimeout(() => setLoading(false), 1000);
    return () => {
      clearInterval(load);
    };
  }, []);

  if (dadosEdit === true) {
    return (
      <StepDataEdit
        title={title}
        dataForm={dataForm}
        setDadosEdit={setDadosEdit}
      />
    );
  }
  return (
    <Scroll>
      <Modals
        visible={visible}
        setVisible={setVisible}
        title="Deseja realmente voltar?"
        textCancel="Cancelar"
        textOk="Sair"
        onFunction={async () => {
          await setLoadRadarInfo();
        }}
      />
      <Header
        mode="common"
        title="Dados"
        back
        onBack={() => {
          setVisible(!visible);
        }}
      />
      <Space vertical={20} />
      {!!loading && (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <ActivityIndicator size={46} color={Colors.blue} />
        </View>
      )}
      {!loading &&
        info.map((indicator, indId) => (
          <>
            <View
              key={`indId_${indId}`}
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
            {indicator.data.map((item, dataId) => (
              <TouchableOpacity
                key={`indId_${indId}dataId_${dataId}`}
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
                  setDadosEdit(!dadosEdit);
                }}>
                <Text
                  title={item.title}
                  size={18}
                  weight={700}
                  color={Colors.textGray}
                />
                <Space vertical={8} />
                {item.desc.map((ind, descId) => (
                  <Text
                    key={`indId_${indId}dataId_${dataId}descId_${descId}`}
                    title={`${ind.title} - ${ind.quant}`}
                    size={16}
                    weight={500}
                    color={Colors.textGray}
                  />
                ))}
                <Space vertical={8} />
                <Text
                  title={item.complete}
                  size={15}
                  weight={600}
                  color={
                    item.complete === 'Sem preencher'
                      ? Colors.secundaryTextGray
                      : item.complete === 'Incompleto'
                      ? Colors.red
                      : item.complete === 'Parcialmente completo'
                      ? Colors.blue
                      : Colors.green
                  }
                />
              </TouchableOpacity>
            ))}
            <Space vertical={15} />
          </>
        ))}
    </Scroll>
  );
};

export default StepEdit;
