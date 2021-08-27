import {authActions} from '@actions/auth';
import {firebase} from 'firebase';
import {dispatchAction} from 'store';

const userPersist = (user: any) => {
  dispatchAction(authActions.setUser, {
    uid: user.uid,
    name: user.name,
    avatar: user.avatar,
    work: user.work,
    completeRegister: user.completeRegister,
  });
};

const Logout = () => {
  return new Promise(async (resolve, reject) => {
    await firebase
      .auth()
      .signOut()
      .then(() => {
        dispatchAction(authActions.logout, {
          uid: undefined,
          name: undefined,
          avatar: undefined,
          work: undefined,
        });
        resolve(true);
      })
      .catch((error: any) => reject(error));
  });
};

export {userPersist, Logout};
