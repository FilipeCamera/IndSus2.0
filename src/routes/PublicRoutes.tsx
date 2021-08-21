import {createStackNavigator} from '@react-navigation/stack';
import {publicFeatures} from 'features';
import React from 'react';

const {Navigator, Screen} = createStackNavigator();

const publicFeature = ['Register', 'Login'];

const routes = Object.keys(publicFeatures).map(
  (feature: keyof PublicFeatureGroup) => {
    if (publicFeature.includes(feature) && publicFeatures[feature].enabled) {
      return {
        name: feature,
        component: publicFeatures[feature].component,
      };
    }
    return {name: '', component: publicFeatures.Register.component};
  },
);

const PublicRoutes = () => {
  return (
    <Navigator initialRouteName="Register" screenOptions={{headerShown: false}}>
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

export default PublicRoutes;
