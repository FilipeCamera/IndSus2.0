import {combineReducers} from 'redux';

import auth from './auth';
import research from './research';
import radar from './radar';

export default combineReducers({
  auth,
  research,
  radar,
});
