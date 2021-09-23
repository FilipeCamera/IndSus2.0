/**
 * @format
 */
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import '@reactotron';

if (__DEV__) {
  import('@reactotron').then(() => console.log('Reactotron Configured'));
}

AppRegistry.registerComponent(appName, () => App);
