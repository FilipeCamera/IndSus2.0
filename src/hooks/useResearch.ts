import {firestore} from 'firebase';
import moment from 'moment';

moment.locale('pt-br');

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

  const getResearchesByUser = async ({userId, onComplete, onFail}: any) => {
    firestore()
      .collection('researches')
      .where('userId', '==', userId)
      .get()
      .then(querySnapshot => {
        const researches = querySnapshot.docs.map(research => ({
          research: research.data(),
          id: research.id,
        }));

        onComplete(researches);
      })
      .catch(err => onFail(err));
  };
  return {getResearchDataToken, getResearchesByUser};
};

export default useResearch;
