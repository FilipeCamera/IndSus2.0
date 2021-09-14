import {Header, Scroll} from 'components';
import React from 'react';

interface StepOneProps {
  setState: any;
}

const Step1 = ({setState}: StepOneProps) => {
  return (
    <Scroll>
      <Header
        title="Pesquisa"
        mode="common"
        back
        onBack={() => setState('form')}
        add
      />
    </Scroll>
  );
};

export default Step1;
