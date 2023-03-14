import {create} from 'zustand';

const INITIAL_STATE = {
  isAuthorized: false,
  isAuthorizing: true,
};

const useAuthorizatonStore = create(set => ({
  ...INITIAL_STATE,
  updateIsAuthorized: (bool = false) => set({isAuthorized: bool}),
  authorizationInitialState: () => set(INITIAL_STATE),
}));

export default useAuthorizatonStore;
