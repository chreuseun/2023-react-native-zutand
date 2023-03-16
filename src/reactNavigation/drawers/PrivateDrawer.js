import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createDrawerNavigator} from '@react-navigation/drawer';

import PrivateDrawerItems from './drawerItems/PrivateDrawerItems';

import {
  AlertsScreen,
  DashboardScreen,
  HomeScreen,
} from 'src/components/screens';
import {
  ALERTS_SCREEN,
  DASHBOARD_SCREEN,
  HOME_SCREEN,
} from 'src/constants/screenNames';

const Drawer = createDrawerNavigator();

const PrivateDrawer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name={HOME_SCREEN} component={HomeScreen} />
        <Drawer.Screen name={ALERTS_SCREEN} component={AlertsScreen} />
        {/* <Drawer.Screen name={HOME_SCREEN} component={HomeScreen} /> */}
        {/* <Drawer.Screen name={DASHBOARD_SCREEN} component={DashboardScreen} />
        <Drawer.Screen name={ALERTS_SCREEN} component={AlertsScreen} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default PrivateDrawer;
