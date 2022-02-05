import {firestore} from 'firebase';

const useSearch = () => {
  const search = async ({value, uid, onComplete, onFail}: any) => {
    firestore()
      .collection('users')
      .where('name', '>=', value)
      .where('name', '<=', value + '\uf8ff')
      .get()
      .then(querySnapshot => {
        const list = querySnapshot.docs.map(doc => doc.data());
        const users = list.filter(user => user.uid !== uid);
        onComplete(users);
      })
      .catch(err => onFail(err));
  };

  return {search};
};

export default useSearch;
