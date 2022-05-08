import {Colors} from '@styles';
import {Header, Scroll, Space, Text} from 'components';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  TouchableOpacity,
  View,
  BackHandler,
} from 'react-native';
import DetailsInfo from './DetailsInfo';

interface Props {
  onBack: () => any;
  researchDetails: any[];
}

const Details = ({onBack, researchDetails}: Props) => {
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState<boolean>(false);
  const [title, setTitle] = useState('');
  const [quantInd, setQuantInd] = useState<number>(0);
  const [info, setInfo] = useState<any>({});

  const backChange = () => {
    onBack();
    return true;
  };
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backChange,
    );
    return () => backHandler.remove();
  }, []);

  useEffect(() => {
    const load = setTimeout(() => setLoading(false), 1000);
    return () => {
      clearInterval(load);
    };
  }, []);
  if (details === true) {
    return (
      <DetailsInfo
        title={title}
        dataForm={info}
        setDados={setDetails}
        quantInd={quantInd}
      />
    );
  }
  return (
    <>
      {!!loading && (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <ActivityIndicator size="large" color={Colors.blue} />
        </View>
      )}
      {!loading &&
        researchDetails.map((indicator, indId) => (
          <>
            <View
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
                  setTitle(item.title);
                  setInfo(item.ind);
                  setQuantInd(item.quantInd);
                  setDetails(true);
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
    </>
  );
};

export default Details;
