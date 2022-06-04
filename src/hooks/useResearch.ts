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

  const getResearchToken = async ({token, onComplete, onFail}: any) => {
    firestore()
      .collection('researches')
      .where('token', '==', token)
      .get()
      .then(querySnapshot => {
        const research = querySnapshot.docs.map(research => {
          return {
            id: research.id,
            ...research.data(),
          };
        });
        onComplete(research[0]);
      })
      .catch(err => onFail(err));
  };

  const getResearchById = async ({uid, onComplete, onFail}: any) => {
    firestore()
      .collection('researches')
      .doc(uid)
      .get()
      .then(querySnapshot => {
        const research = querySnapshot.data();
        onComplete(research);
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

  const getResearchesByUserDateNow = async ({
    userId,
    onComplete,
    onFail,
  }: any) => {
    firestore()
      .collection('researches')
      .orderBy('createDate', 'desc')
      .startAfter(firestore.Timestamp.now())
      .limit(3)
      .get()
      .then(querySnapshot => {
        const researches = querySnapshot.docs.filter(research => {
          const res = research.data();
          if (res.userId === userId) return {res, id: research.id};
        });

        onComplete(researches);
      })
      .catch(err => onFail(err));
  };

  const getResearchShare = async ({uid, onComplete, onFail}: any) => {
    firestore()
      .collection('shares')
      .where('to', '==', uid)
      .get()
      .then(querySnapshot => {
        const list = querySnapshot.docs.map(doc => {
          return {
            ...doc.data(),
            id: doc.id,
          };
        });
        onComplete(list);
      })
      .catch(error => onFail(error));
  };

  return {
    getResearchDataToken,
    getResearchesByUser,
    getResearchToken,
    getResearchShare,
    getResearchById,
    getResearchesByUserDateNow,
  };
};

export default useResearch;
