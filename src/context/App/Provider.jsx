// Vendor
import React, { useMemo, useCallback, useEffect } from 'react';
import createPersistedReducer from 'use-persisted-reducer';
// Internal

import AppContext, { initialState } from './Context';
import mainReducer from './reducers';

const usePersistedReducer = createPersistedReducer('state');

export function AppProvider({ children }) {
  const [state, dispatch] = usePersistedReducer(mainReducer, initialState);

  const dispatchShared = useCallback((props) => {
    //   console.log('>>>>>', props)

    window.dispatchEvent(new CustomEvent('storage', { detail: props }));
  }, []);

  useEffect(() => {
    const handler = (evt) => {
      console.log('hanndler', evt.detail);
      dispatch(evt.detail);
    };

    window.addEventListener('storage', handler);

    return () => window.removeEventListener('storage', handler);
  }, [dispatch]);

  const value = useMemo(
    () => ({ state, dispatch: dispatchShared }),
    [state, dispatchShared]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default AppProvider;
