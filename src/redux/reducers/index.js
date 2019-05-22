import { combineReducers } from 'redux';
import appReducer from "./appReducer";
import loginReducer from "./loginReducer";

export default combineReducers({
  app: appReducer,
  login: loginReducer
});
