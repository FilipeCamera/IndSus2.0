import {Login, Register} from 'screens';

const publicFeatures: PublicFeatureGroup = {
  Register: {
    enabled: true,
    component: Register,
    enabledMethod: {
      email: true,
      google: true,
    },
  },
  Login: {
    enabled: true,
    component: Login,
    enabledMethod: {
      email: true,
      google: true,
    },
  },
};
const privateFeatures: PrivateFeatureGroup = {};

export {publicFeatures, privateFeatures};
