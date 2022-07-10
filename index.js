/**
 * @format
 */
import {AppRegistry} from 'react-native';
import {messaging} from 'src/config/firebase';

import App from './App';
import {name as appName} from './app.json';

messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);
});

if (__DEV__) {
  import('@reactotron').then(() => console.log('Reactotron Configured'));
}

AppRegistry.registerComponent(appName, () => App);
