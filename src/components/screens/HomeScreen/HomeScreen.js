import React, {useEffect, useState} from 'react';

import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Button,
  ScrollView,
} from 'react-native';
import {useAuthorizationState, useTestState} from 'src/zustand';

const HomeScreen = () => {
  const [arrayOfLog, setArrayOfLogs] = useState([]);

  const authorizationStates = useAuthorizationState(state => state);
  const testStates = useTestState(state => state);

  useEffect(() => {
    testStates.incrementSessionCount();

    setTimeout(() => {
      setArrayOfLogs([
        {creation_data: '2023-03-01 01:03:00', level: 11.5},
        {creation_data: '2023-03-01 01:10:00', level: 12},
        {creation_data: '2023-03-01 01:03:00', level: 11.5},
        {creation_data: '2023-03-01 01:10:00', level: 12},
        {creation_data: '2023-03-01 01:03:00', level: 11.5},
        {creation_data: '2023-03-01 01:10:00', level: 12},
        {creation_data: '2023-03-01 01:03:00', level: 11.5},
        {creation_data: '2023-03-01 01:10:00', level: 12},
        {creation_data: '2023-03-01 01:03:00', level: 11.5},
        {creation_data: '2023-03-01 01:10:00', level: 12},
        {creation_data: '2023-03-01 01:03:00', level: 11.5},
        {creation_data: '2023-03-01 01:10:00', level: 12},
        {creation_data: '2023-03-01 01:03:00', level: 11.5},
        {creation_data: '2023-03-01 01:10:00', level: 12},
        {creation_data: '2023-03-01 01:03:00', level: 11.5},
        {creation_data: '2023-03-01 01:10:00', level: 12},
        {creation_data: '2023-03-01 01:03:00', level: 11.5},
        {creation_data: '2023-03-01 01:10:00', level: 12},
        {creation_data: '2023-03-01 01:03:00', level: 11.5},
        {creation_data: '2023-03-01 01:10:00', level: 12},
      ]);
    }, 100);

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
      <View style={{borderWidth: 2, borderColor: 'red', flex: 1}}>
        <Text>THIS IS HOME SCREEN</Text>
        <ScrollView>
          {arrayOfLog.map(record => (
            <View
              style={{
                borderWidth: 1,
                padding: 16,
                borderRadius: 16,
                margin: 8,
              }}>
              <Text>LEVEL OF WATER: {record.level}</Text>
              <Text>Date : {record.creation_data}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
      <Button title="LOGOUT" onPress={onLogout} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
