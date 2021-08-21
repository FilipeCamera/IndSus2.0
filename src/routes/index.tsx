import React from 'react';
import PublicRoutes from './PublicRoutes';

import {createStackNavigator} from '@react-navigation/stack';

const {Navigator, Screen} = createStackNavigator();

const Routes = () => {
  return (
    <Navigator initialRouteName="Public" screenOptions={{headerShown: false}}>
      <Screen name="Public" component={PublicRoutes} />
    </Navigator>
  );
};

export default Routes;
