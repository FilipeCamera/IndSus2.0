import {Colors} from '@styles';
import {Text} from 'components';
import React, {useState, useEffect} from 'react';
import {BoxNotaStyle} from './styles';

interface BoxNotaProps {
  cri: any[];
}

const BoxNota = ({cri}: BoxNotaProps) => {
  const [nota, setNota] = useState(0);

  useEffect(() => {
    const result =
      parseInt(cri[0].value) + parseInt(cri[1].value) + parseInt(cri[2].value);
    setNota(result / cri.length);
  }, []);

  return (
    <BoxNotaStyle>
      <Text
        title={nota ? nota.toFixed(2) : ''}
        weight={700}
        color={Colors.secundaryText2}
        size={14}
      />
    </BoxNotaStyle>
  );
};

export default BoxNota;
