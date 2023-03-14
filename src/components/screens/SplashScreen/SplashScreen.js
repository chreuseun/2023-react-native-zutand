import React from 'react';

import {SafeAreaView, View, ActivityIndicator} from 'react-native';

const SplashScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={'large'} />
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;
