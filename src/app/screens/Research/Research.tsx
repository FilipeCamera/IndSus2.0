import React, {useState} from 'react';
import Form from './Form';
import {Step1, Step2} from './Steps';

const Research = ({navigation}: any) => {
  const [state, setState] = useState('form');
  const [area, setArea] = useState(0);
  return (
    <>
      {state === 'form' && <Form navigation={navigation} setState={setState} />}
      {state === 'research' && (
        <Step1 setState={setState} area={area} setArea={setArea} />
      )}
      {state === 'data' && (
        <Step2 setState={setState} area={area} setArea={setArea} />
      )}
    </>
  );
};

export default Research;
