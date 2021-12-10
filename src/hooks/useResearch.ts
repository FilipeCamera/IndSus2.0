import {firestore} from 'firebase';

const useResearch = () => {
  const getResearchDataToken = async ({token, onComplete, onFail}: any) => {
    firestore()
      .collection('researches')
      .where('token', '==', token)
      .get()
      .then(querySnapshot => {
        const uid = querySnapshot.docs.map(research => research.id);
        onComplete(uid[0]);
      })
      .catch(err => onFail(err));
  };

  return {getResearchDataToken};
};

export default useResearch;
