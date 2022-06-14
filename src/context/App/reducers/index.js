// Internal
import dataReducer from './reducer-data';
import uiReducer from './reducer-ui';

const mainReducer = ({ data, ui }, action) => ({
  data: dataReducer(data, action),
  ui: uiReducer(ui, action),
});

export default mainReducer;
