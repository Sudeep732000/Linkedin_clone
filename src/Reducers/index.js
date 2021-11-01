import { combineReducers } from "redux";
import userReducer from "./userReducer";
import articleUpdater from "./articleUpdater";

const rootReducer = combineReducers({
  userState: userReducer,
  articleState: articleUpdater,
});

export default rootReducer;
