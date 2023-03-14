import {create} from 'zustand';

const INITIAL_STATE = {
  sessionCount: 0,
};

const useTestState = create(set => ({
  ...INITIAL_STATE,
  incrementSessionCount: () =>
    set(state => ({sessionCount: state.sessionCount + 1})),
  resetSessionCount: () => set(INITIAL_STATE),
}));

export default useTestState;
