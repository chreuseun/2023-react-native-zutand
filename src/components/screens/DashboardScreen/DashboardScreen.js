import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const DashboardScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        <Text>DASHBOARD SCREEN</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContainer: {
    flex: 1,
    borderWidth: 5,
    borderColor: 'red',
  },
});

export default DashboardScreen;
