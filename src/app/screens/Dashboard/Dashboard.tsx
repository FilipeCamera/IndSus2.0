import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Profile, Researches} from 'screens';
import {StatusBar} from 'react-native';

const Tabs = createBottomTabNavigator();

import HomeIconSelected from 'assets/svg/home.svg';
import HomeIcon from 'assets/svg/homeGray.svg';
import ResearchIconSelected from 'assets/svg/pesquisa.svg';
import ResearchIcon from 'assets/svg/pesquisaGray.svg';
import ProfileIconSelected from 'assets/svg/profile.svg';
import ProfileIcon from 'assets/svg/profileGray.svg';

import {Text} from 'components';
import {Colors} from '@styles';

const Dashboard = () => {
  return (
    <>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor="transparent"
      />
      <Tabs.Navigator initialRouteName="Home">
        <Tabs.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            unmountOnBlur: true,
            tabBarLabel: ({focused}: any) => (
              <Text
                title="Home"
                size={12}
                weight={500}
                color={focused ? Colors.textBlack : Colors.secundaryTextGray}
              />
            ),
            tabBarIcon: ({focused}: any) =>
              focused ? <HomeIconSelected /> : <HomeIcon />,
          }}
        />
        <Tabs.Screen
          name="Researches"
          component={Researches}
          options={{
            headerShown: false,
            unmountOnBlur: true,
            tabBarLabel: ({focused}: any) => (
              <Text
                title="Pesquisas"
                size={12}
                weight={500}
                color={focused ? Colors.textBlack : Colors.secundaryTextGray}
              />
            ),
            tabBarIcon: ({focused}: any) =>
              focused ? <ResearchIconSelected /> : <ResearchIcon />,
          }}
        />
        <Tabs.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false,
            unmountOnBlur: true,
            tabBarLabel: ({focused}: any) => (
              <Text
                title="Perfil"
                size={12}
                weight={500}
                color={focused ? Colors.textBlack : Colors.secundaryTextGray}
              />
            ),
            tabBarIcon: ({focused}: any) =>
              focused ? <ProfileIconSelected /> : <ProfileIcon />,
          }}
        />
      </Tabs.Navigator>
    </>
  );
};

export default Dashboard;
