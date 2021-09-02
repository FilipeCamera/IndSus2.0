import {Dashboard, Home, Login, Onboarding, Register} from 'screens';

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
  Dashboard: {
    enabled: true,
    component: Dashboard,
  },
};

const tabsFeatures: TabsFeatureGroup = {
  Home: {
    enabled: true,
    component: Home,
  },
};

export {publicFeatures, privateFeatures, tabsFeatures};
