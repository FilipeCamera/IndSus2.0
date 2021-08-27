import {createAction, createReducer} from 'typesafe-actions';

const setUser = createAction('auth/SET_USER')();
const logout = createAction('auth/LOGOUT')();

const initialState: any = {
  user: {
    uid: undefined,
    name: undefined,
    avatar: undefined,
    work: undefined,
    completeRegister: undefined,
  },
};

const reducer = createReducer(initialState)
  .handleAction(setUser, (state: any, {payload: data}: any) => ({
    ...state,
    user: data,
  }))
  .handleAction(logout, () => initialState);

const authActions = {
  setUser,
  logout,
};

export {reducer as default, authActions};
