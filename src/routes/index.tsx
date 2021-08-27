import React from 'react';
import PublicRoutes from './PublicRoutes';

import {createStackNavigator} from '@react-navigation/stack';
import PrivateRoutes from './PrivateRoutes';
import {useSelector} from 'react-redux';

const {Navigator, Screen} = createStackNavigator();

const Routes = () => {
  const user = useSelector((state: any) => state.auth.user);
  return (
    <Navigator
      initialRouteName={user.uid !== undefined ? 'Private' : 'Public'}
      screenOptions={{headerShown: false}}>
      <Screen name="Public" component={PublicRoutes} />
      <Screen name="Private" component={PrivateRoutes} />
    </Navigator>
  );
};

export default Routes;
