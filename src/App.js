/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';

import {PublicNavigation} from 'src/reactNavigation/public';
import {PrivateNavigation} from 'src/reactNavigation/private';

const App = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    if (__DEV__) {
      console.log('--- APP IS MOUNTED');

      setTimeout(() => {
        setIsAuthorized(true);
      }, 10000);
    }
  }, []);

  if (isAuthorized) {
    return <PrivateNavigation />;
  }

  return <PublicNavigation />;
};

export default App;
