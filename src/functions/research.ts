import {researchActions} from '@actions/research';
import {dispatchAction} from 'store';

const researchPersist = (research: any) => {
  dispatchAction(researchActions.setResearch, {
    image: research.image,
    biome: research.biome,
    ownerName: research.ownerName,
    propertyName: research.propertyName,
    city: research.city,
    uf: research.uf,
    data: research.data,
  });
};

const deleteResearch = () => {
  return new Promise(async (resolve, reject) => {
    dispatchAction(researchActions.delResearch, {
      biome: undefined,
      ownerName: undefined,
      propertyName: undefined,
      address: undefined,
      city: undefined,
      uf: undefined,
      data: undefined,
    });
    resolve(true);
  });
};

export {researchPersist, deleteResearch};
