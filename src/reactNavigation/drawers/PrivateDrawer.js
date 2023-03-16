import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

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
    <Drawer.Navigator backBehavior="none" initialRouteName={HOME_SCREEN}>
      <Drawer.Screen name={HOME_SCREEN} component={HomeScreen} />
      <Drawer.Screen name={DASHBOARD_SCREEN} component={DashboardScreen} />
      <Drawer.Screen name={ALERTS_SCREEN} component={AlertsScreen} />
    </Drawer.Navigator>
  );
};

export default PrivateDrawer;
