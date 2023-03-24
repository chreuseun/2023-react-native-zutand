import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const AlertsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        <Text>ALERTS SCREEN</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    borderWidth: 5,
    borderColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AlertsScreen;
