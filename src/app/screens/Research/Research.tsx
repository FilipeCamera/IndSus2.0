import React, {useMemo, useState} from 'react';
import Form from './Form';
import {Step1, Step2} from './Steps';
import StepEdit from './Steps/StepEdit';

const Research = ({navigation}: any) => {
  const [state, setState] = useState('form');
  const [dataInfo, setDataInfo] = useState<any>();
  const [dataArea, setDataArea] = useState<any[]>([]);
  const [dataRadar, setDataRadar] = useState<any[]>([]);
  const [position, setPosition] = useState(0);
  const [areaTitle, setAreaTitle] = useState(
    dataArea.length !== 0 ? dataArea[0].title : 'Área 1',
  );
  const [dataAreaSelected, setDataAreaSelected] = useState<any[]>([]);
  const [area, setArea] = useState(0);

  const handleDeleteArea = useMemo(() => {
    if (dataArea.length === 0) {
      setArea(0);
    } else if (dataArea.length !== 0) {
      setAreaTitle(dataArea[0].title);
      setPosition(0);
    } else {
      setAreaTitle('');
    }
  }, [dataArea]);

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
          setAreaTitle={setAreaTitle}
          areaTitle={areaTitle}
          handleDeleteArea={handleDeleteArea}
          setPosition={setPosition}
          setDataRadar={setDataRadar}
          setDataAreaSelected={setDataAreaSelected}
          navigation={navigation}
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
