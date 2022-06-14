// Types

import { ProviderTypes } from '../constants';

export const appReducer = (state, action) => {
  const stagedState = { ...state };

  switch (action.type) {
    case ProviderTypes.UpdatePopularityFilter:
      stagedState.popularityFilterValue = action.payload.popularityFilterValue;
      return stagedState;
    case ProviderTypes.UpdateSearchFilter:
      stagedState.searchFilterValue = action.payload.searchFilterValue;
      return stagedState;
    default:
      return state;
  }
};

export default appReducer;
