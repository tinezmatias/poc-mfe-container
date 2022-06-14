// Vendor
import React, { createContext } from 'react';

export const initialState = {
  ui: {
    popularityFilterValue: 0,
    searchFilterValue: '',
  },
  data: {
    id: undefined,
  },
};

export const AppContext = createContext({
  state: initialState,
  dispatch: () => null,
});

AppContext.displayName = 'AppContext';

export default AppContext;
