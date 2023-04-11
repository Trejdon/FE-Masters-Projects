import { Dispatch, PropsWithChildren, useReducer } from 'react';
import colorReducer, { initialState } from './lib/color-reducer';
import { createContext } from './create-context';

type ColorContextState = {
  hexColor: string;
  dispatch: Dispatch<AdjustColorActions>;
};

const [useColorContext, ContextProvider] = createContext<ColorContextState>();
// The above and below can be switched name wise, all opinion at this point
export const useContext = useColorContext;

export const ColorProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(colorReducer, initialState);
  const hexColor = state.hexColor;

  return (
    <ContextProvider value={{ hexColor, dispatch }}>{children}</ContextProvider>
  );
};
