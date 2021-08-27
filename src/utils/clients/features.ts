import {Home, Login, Onboarding, Register} from 'screens';

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
const privateFeatures: PrivateFeatureGroup = {
  Onboarding: {
    enabled: true,
    component: Onboarding,
  },
  Home: {
    enabled: true,
    component: Home,
  },
};

export {publicFeatures, privateFeatures};
