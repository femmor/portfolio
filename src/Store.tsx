import {
  Dispatch,
  PropsWithChildren,
  Reducer,
  useReducer,
  createContext,
} from 'react';

type AppState = {
  mode: string;
};

const initialState: AppState = {
  mode: localStorage.getItem('mode')
    ? localStorage.getItem('mode')!
    : window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light',
};

type Action = { type: 'SET_MODE' };

const reducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case 'SET_MODE':
      const newMode = state.mode === 'light' ? 'dark' : 'light';
      localStorage.setItem('mode', newMode);
      return { ...state, mode: newMode };
    default:
      return state;
  }
};

const defaultDispatch: Dispatch<Action> = () => initialState;

const Store = createContext({
  state: initialState,
  dispatch: defaultDispatch,
});

const StoreProvider = ({ children }: PropsWithChildren<{}>) => {
  const [state, dispatch] = useReducer<Reducer<AppState, Action>>(
    reducer,
    initialState
  );

  return (
    <Store.Provider value={{ state, dispatch }}>
      {children}
    </Store.Provider>
  );
};

export { Store, StoreProvider };
