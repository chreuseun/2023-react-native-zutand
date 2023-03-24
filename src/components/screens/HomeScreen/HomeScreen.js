import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Button,
  FlatList,
} from 'react-native';
import {useAuthorizationState, useTestState} from 'src/zustand';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [arrayOfLogs, setArrayOfLogs] = useState([]);

  const authorizationStates = useAuthorizationState(state => state);
  const testStates = useTestState(state => state);

  useEffect(() => {
    testStates.incrementSessionCount();

    setArrayOfLogs([
      {creation_data: '2023-03-01 01:03:00', level: 11.5},
      {creation_data: '2023-03-01 01:10:00', level: 12},
    ]);
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
        <Button onPress={() => navigation.toggleDrawer()} title={'toggle'} />
        <FlatList
          data={arrayOfLogs}
          renderItem={({item, index}) => (
            <View>
              <Text>{item?.level}</Text>
            </View>
          )}
        />
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
