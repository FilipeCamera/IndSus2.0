import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import Routes from 'routes';
import {SafeAreaView} from 'react-native-safe-area-context';

import {Provider as PaperProvider, DefaultTheme} from 'react-native-paper';
import {Colors} from '@styles';

const theme = {
  ...DefaultTheme,
  roundness: 8,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.background,
    primary: Colors.outlineColor,
    text: Colors.textSecundaryBlack,
    error: Colors.red,
  },
};

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </SafeAreaView>
    </PaperProvider>
  );
};

export default App;
