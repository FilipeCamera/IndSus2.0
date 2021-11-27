import {firestore} from 'firebase';

const useResearch = () => {
  const getResearchUserId = async ({userId, onComplete, onFail}: any) => {
    firestore()
      .collection('researches')
      .where('userId', '==', userId)
      .get()
      .then(querySnapshot => {
        const uid = querySnapshot.docs.map(research => research.id);
        onComplete(uid[0]);
      })
      .catch(err => onFail(err));
  };

  return {getResearchUserId};
};

export default useResearch;
