import {radarActions} from '@actions/radar';
import {dispatchAction} from 'store';

const radarPersist = (radar: any) => {
  dispatchAction(radarActions.setRadar, {
    info: radar,
  });
};

const deleteRadar = () => {
  return new Promise(async (resolve, reject) => {
    dispatchAction(radarActions.delRadar, {
      info: undefined,
    });
    resolve(true);
  });
};

export {radarPersist, deleteRadar};
