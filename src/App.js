/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';

import {PublicNavigation} from 'src/reactNavigation/public';

const App = () => {
  useEffect(() => {
    if (__DEV__) {
      console.log('--- APP IS MOUNTED');
    }
  }, []);

  return <PublicNavigation />;
};

export default App;
