import {create} from 'zustand';

const INITIAL_STATE = {
  isAuthorized: false,
  isAuthorizing: true,
};

const useAuthorizatonStore = create(set => ({
  ...INITIAL_STATE,
  updateIsAuthorized: bool => set({isAuthorized: !!bool}),
  updateIsAuthorizing: bool => set({isAuthorizing: !!bool}),
  authorizationInitialState: () => set(INITIAL_STATE),
}));

export default useAuthorizatonStore;
