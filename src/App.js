/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';

import {PublicNavigation} from 'src/reactNavigation/public';
import {PrivateNavigation} from 'src/reactNavigation/private';
import {useAuthorizationState} from 'src/zustand';

const App = () => {
  const isAuthorized = useAuthorizationState(state => state.isAuthorized);

  useEffect(() => {
    if (__DEV__) {
      console.log('--- APP IS MOUNTED');
    }
  }, []);

  if (isAuthorized) {
    return <PrivateNavigation />;
  }

  return <PublicNavigation />;
};

export default App;
