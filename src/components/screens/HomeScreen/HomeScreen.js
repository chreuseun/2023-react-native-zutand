import React, {useEffect} from 'react';

import {Text, SafeAreaView, StyleSheet, View, Button} from 'react-native';
import {useAuthorizationState} from 'src/zustand';

const HomeScreen = () => {
  const authorizationStates = useAuthorizationState(state => state);

  useEffect(() => {
    console.log('--- HOME MOUNTED');
  }, []);

  const onLogout = () => {
    authorizationStates.authorizationInitialState();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>THIS IS HOME SCREEN</Text>
        <Text>{JSON.stringify(authorizationStates, null, 4)}</Text>
        <Button title="LOGOUT" onPress={onLogout} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
