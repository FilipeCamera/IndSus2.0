import React, {useState} from 'react';
import Form from './Form';

const Research = ({navigation}: any) => {
  const [state, setState] = useState('form');
  return <>{state === 'form' && <Form navigation={navigation} />}</>;
};

export default Research;
