import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import Routes from 'routes';
import {SafeAreaView} from 'react-native-safe-area-context';

import FlashMessage from 'react-native-flash-message';
import {getStatusBarHeight} from 'react-native-status-bar-height';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider as PaperProvider, DefaultTheme} from 'react-native-paper';
import {Colors} from '@styles';
import store, {persist} from 'store';
import {useGetUser} from 'hooks';
import {permissions, userPersist} from 'functions';
import {RFValue} from 'react-native-responsive-fontsize';

import {LogBox} from 'react-native';

LogBox.ignoreLogs([
  'Warning: Each child in a list should have a unique "key" prop.',
]);

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
  const {getLogged, getUser} = useGetUser();

  const saveUser = (user: any) => {
    getUser({
      uid: user.uid,
      onComplete: user => {
        if (user) {
          userPersist(user);
          SplashScreen.hide();
        }
      },
      onFail: error => {
        console.log(error);
        SplashScreen.hide();
      },
    });
  };

  useEffect(() => {
    permissions();
    getLogged({
      onComplete: (user: any) => {
        if (user) {
          saveUser(user);
        } else {
          SplashScreen.hide();
        }
      },
    });
  }, []);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persist}>
        <PaperProvider theme={theme}>
          <SafeAreaView style={{flex: 1}}>
            <NavigationContainer>
              <Routes />
            </NavigationContainer>
          </SafeAreaView>
          <FlashMessage
            statusBarHeight={getStatusBarHeight()}
            position="top"
            duration={3000}
            titleStyle={{
              fontFamily: 'Montserrat-Medium',
              fontSize: RFValue(18),
            }}
            textStyle={{fontFamily: 'Montserrat-Medium', fontSize: RFValue(16)}}
          />
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
