import React, {useState} from 'react';
import Form from './Form';
import {Step1, Step2} from './Steps';
import StepEdit from './Steps/StepEdit';

const Research = ({navigation}: any) => {
  const [state, setState] = useState('form');
  const [dataInfo, setDataInfo] = useState<any>();
  const [dataArea, setDataArea] = useState<any[]>([]);
  const [dataRadar, setDataRadar] = useState<any[]>([]);
  const [position, setPosition] = useState(0);
  const [dataAreaSelected, setDataAreaSelected] = useState<any[]>([]);
  const [dataRadarSelected, setDataRadarSelected] = useState<any>();
  const [area, setArea] = useState(0);
  return (
    <>
      {state === 'form' && (
        <Form
          navigation={navigation}
          setState={setState}
          setDataInfo={setDataInfo}
        />
      )}
      {state === 'research' && (
        <Step1
          setState={setState}
          area={area}
          setDataArea={setDataArea}
          setArea={setArea}
          dataInfo={dataInfo}
          dataArea={dataArea}
          dataRadar={dataRadar}
          position={position}
          setPosition={setPosition}
          setDataRadar={setDataRadar}
          setDataAreaSelected={setDataAreaSelected}
          setDataRadarSelected={setDataRadarSelected}
        />
      )}
      {state === 'data' && (
        <Step2
          setState={setState}
          area={area}
          setArea={setArea}
          dataArea={dataArea}
          setDataArea={setDataArea}
          dataRadar={dataRadar}
          setDataRadar={setDataRadar}
        />
      )}
      {state === 'dataEdit' && (
        <StepEdit
          setState={setState}
          dataAreaSelected={dataAreaSelected}
          setDataRadar={setDataRadar}
          dataRadar={dataRadar}
          position={position}
        />
      )}
    </>
  );
};

export default Research;
