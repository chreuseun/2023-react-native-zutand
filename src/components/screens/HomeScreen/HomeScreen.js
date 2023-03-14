import React, {useEffect} from 'react';

import {Text, SafeAreaView, StyleSheet, View, Button} from 'react-native';
import {useAuthorizationState, useTestState} from 'src/zustand';

const HomeScreen = () => {
  const authorizationStates = useAuthorizationState(state => state);
  const testStates = useTestState(state => state);

  useEffect(() => {
    testStates.incrementSessionCount();

    return () => {
      if (testStates.sessionCount === 10) {
        testStates.resetSessionCount();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onLogout = () => {
    authorizationStates.updateIsAuthorized(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>THIS IS HOME SCREEN</Text>
        <Text>
          {JSON.stringify({authorizationStates, testStates}, null, 4)}
        </Text>
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
