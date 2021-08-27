import {firestore, auth} from 'firebase';

const useGetUser = () => {
  const controller = new AbortController();
  const getLogged = ({onComplete}: any) => {
    auth().onAuthStateChanged((user: any) => {
      if (user) {
        onComplete(user);
      } else {
        onComplete(undefined);
      }
    });
    return () => {
      const timeout = setTimeout(() => controller.abort(), 5000);
      clearTimeout(timeout);
    };
  };
  const getUser = async ({uid, onComplete, onFail}: any) => {
    await firestore()
      .collection('users')
      .doc(uid)
      .get()
      .then(querySnapshot => {
        const user = querySnapshot.data();
        onComplete(user);
      })
      .catch(error => {
        onFail(error);
      });

    return () => {
      const timeout = setTimeout(() => controller.abort(), 5000);
      clearTimeout(timeout);
    };
  };
  return {getLogged, getUser};
};

export default useGetUser;
