import {combineReducers} from 'redux';

import auth from './auth';
import research from './research';

export default combineReducers({
  auth,
  research,
});
