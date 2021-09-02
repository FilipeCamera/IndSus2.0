import {createStackNavigator} from '@react-navigation/stack';
import {privateFeatures} from 'features';
import React from 'react';
import {useSelector} from 'react-redux';

const {Navigator, Screen} = createStackNavigator();

const privateFeature = ['Onboarding', 'Dashboard'];

const routes = Object.keys(privateFeatures).map(
  (feature: keyof PublicFeatureGroup) => {
    if (privateFeature.includes(feature) && privateFeatures[feature].enabled) {
      return {
        name: feature,
        component: privateFeatures[feature].component,
      };
    }
    return {name: '', component: privateFeatures.Home.component};
  },
);

const PrivateRoutes = () => {
  const user = useSelector((state: any) => state.auth.user);
  return (
    <Navigator
      initialRouteName={user.completeRegister ? 'Dashboard' : 'Onboarding'}
      screenOptions={{headerShown: false}}>
      {routes.map(route => (
        <Screen
          key={route.name}
          name={route.name}
          component={route.component}
        />
      ))}
    </Navigator>
  );
};

export default PrivateRoutes;
