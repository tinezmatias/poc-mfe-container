// Types
import { ProviderTypes } from '../constants';

export const dataReducer = (state, action) => {
  const stagedState = { ...state };
  switch (action.type) {
    case ProviderTypes.UpdateData:
      stagedState.id = action.payload.id;
      stagedState.overview = action.payload.overview;
      stagedState.release_date = action.payload.release_date;
      stagedState.backdrop_path = action.payload.backdrop_path;
      stagedState.vote_count = action.payload.vote_count;
      stagedState.vote_average = action.payload.vote_average;
      stagedState.original_language = action.payload.original_language;
      stagedState.original_title = action.payload.original_title;
      stagedState.poster_path = action.payload.poster_path;
      stagedState.title = action.payload.title;
      return stagedState;
    default:
      return state;
  }
};

export default dataReducer;
