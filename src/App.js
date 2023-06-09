import 'react-native-gesture-handler';

import React, {useEffect} from 'react';

import {PublicNavigation} from 'src/reactNavigation/public';
import {PrivateNavigation} from 'src/reactNavigation/private';

import {useAuthorizationState} from 'src/zustand';
import {SplashScreen} from 'src/components/screens';
import {PrivateDrawer} from 'src/reactNavigation/drawers';

const App = () => {
  const isAuthorized = useAuthorizationState(state => state.isAuthorized);
  const isAuthorizing = useAuthorizationState(state => state.isAuthorizing);
  const updateIsAuthorizing = useAuthorizationState(
    state => state.updateIsAuthorizing,
  );

  useEffect(() => {
    if (__DEV__) {
      console.log('--- APP IS MOUNTED');
    }

    setTimeout(() => {
      updateIsAuthorizing(false);
    }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isAuthorizing) {
    return <SplashScreen />;
  }

  if (isAuthorized) {
    return <PrivateDrawer />;
  }

  return <PrivateDrawer />;
};

export default App;
