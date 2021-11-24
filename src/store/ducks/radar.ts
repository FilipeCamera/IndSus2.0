import {createAction, createReducer} from 'typesafe-actions';

const setRadar = createAction('research/SET_RADAR')();

const delRadar = createAction('research/DEL_RADAR')();

const initialState: any = {
  radar: {
    info: undefined,
  },
};

const reducer = createReducer(initialState)
  .handleAction(setRadar, (state: any, {payload: data}: any) => ({
    ...state,
    radar: data,
  }))
  .handleAction(delRadar, () => initialState);

const radarActions = {
  setRadar,
  delRadar,
};
export {reducer as default, radarActions};
