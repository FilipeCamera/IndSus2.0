import React, {useState} from 'react';
import Form from './Form';
import Step1 from './Steps';

const Research = ({navigation}: any) => {
  const [state, setState] = useState('form');
  return (
    <>
      {state === 'form' && <Form navigation={navigation} setState={setState} />}
      {state === 'research' && <Step1 setState={setState} />}
    </>
  );
};

export default Research;
