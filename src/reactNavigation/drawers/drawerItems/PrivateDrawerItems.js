import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import {DrawerContentScrollView} from '@react-navigation/drawer';

const PrivateDrawerItems = props => {
  return (
    <DrawerContentScrollView {...props}>
      <TouchableOpacity>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Home</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Dashboard</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
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
