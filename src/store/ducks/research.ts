import {createAction, createReducer} from 'typesafe-actions';

const setResearch = createAction('research/SET_RESEARCH')();

const delResearch = createAction('research/DEL_RESEARCH')();

const initialState: any = {
  research: {
    biome: undefined,
    ownerName: undefined,
    propertyName: undefined,
    address: undefined,
    city: undefined,
    uf: undefined,
    data: undefined,
  },
};

const reducer = createReducer(initialState)
  .handleAction(setResearch, (state: any, {payload: data}: any) => ({
    ...state,
    user: data,
  }))
  .handleAction(delResearch, () => initialState);

const researchActions = {
  setResearch,
  delResearch,
};
export {reducer as default, researchActions};
