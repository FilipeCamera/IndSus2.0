import {firestore} from 'firebase';

const useRadarDataArea = () => {
  const getRadarArea = async ({id, onComplete, onFail}: any) => {
    firestore()
      .collection('radarAreas')
      .doc(id)
      .get()
      .then(querySnapshot => {
        const radar = querySnapshot.data();
        onComplete(radar);
      })
      .catch(err => onFail(err));
  };

  const getDataArea = async ({id, onComplete, onFail}: any) => {
    firestore()
      .collection('dataAreas')
      .doc(id)
      .get()
      .then(querySnapshot => {
        const data = querySnapshot.data();
        onComplete(data);
      })
      .catch(err => onFail(err));
  };

  return {getRadarArea, getDataArea};
};

export default useRadarDataArea;
