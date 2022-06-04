import {Header, Scroll} from 'components';
import React, {useEffect} from 'react';
import {BackHandler} from 'react-native';

const Warnings = ({navigation}: any) => {
  const backChange = () => {
    navigation.goBack();
    return true;
  };
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backChange,
    );
    return () => backHandler.remove();
  }, []);
  return (
    <>
      <Header
        mode="common"
        back
        title="Avisos"
        onBack={() => navigation.goBack()}
      />
      <Scroll></Scroll>
    </>
  );
};

export default Warnings;
