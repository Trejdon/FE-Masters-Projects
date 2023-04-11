import React from 'react';

// Creating a custom context wrapper that is properly typed for our use case

export const createContext = <T extends {}>() => {
  const Context = React.createContext<T | undefined>(undefined);

  const useContext = () => {
    const ctx = React.useContext(Context);

    // There shouldn't be a world where our context is undefined
    // So, error out so we can lockdown T as our type
    if (ctx === undefined) {
      throw new Error(
        `useContext must be inside a Provider and a value must be provided`,
      );
    }

    return ctx;
  };

  return [useContext, Context.Provider] as const;
};
