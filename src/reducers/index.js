import { combineReducers } from "redux";

import infoReducer from "./infoReducer";

const reducer = combineReducers({
  info: infoReducer,
});

export default reducer;
