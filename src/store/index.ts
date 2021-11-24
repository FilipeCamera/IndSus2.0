import {createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import {getType} from 'typesafe-actions';
import reducers from './ducks';
import AsyncStorage from '@react-native-community/async-storage';
import {Reactotron} from 'firebase';

const config = {
  key: 'IndSus',
  storage: AsyncStorage,
  whiteList: ['auth', 'research', 'radar'],
};

const persistReducers = persistReducer(config, reducers);
const store = createStore(persistReducers, Reactotron.createEnhancer());
const persist = persistStore(store);

const dispatchAction = (type: any, payload: any) => {
  return store.dispatch({type: getType(type), payload: payload});
};

export {dispatchAction, persist, store as default};
