import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {
  HOME_SCREEN,
  ALERTS_SCREEN,
  DASHBOARD_SCREEN,
} from 'src/constants/screenNames';

const PrivateDrawerItems = props => {
  const navigation = useNavigation();

  const toHome = () => {
    console.log('--- TEST');
    navigation.navigate(HOME_SCREEN);
  };
  const toDashboard = () => {
    navigation.navigate(DASHBOARD_SCREEN);
  };
  const toAlert = () => {
    navigation.navigate(ALERTS_SCREEN);
  };

  return (
    <DrawerContentScrollView {...props}>
      <TouchableOpacity onPress={toHome}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Home</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={toDashboard}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Dashboard</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={toAlert}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Alert</Text>
        </View>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 16,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#272727',
  },
});

export default PrivateDrawerItems;
