import { combineReducers } from "redux";
import activityReducers from "./activity";

export default combineReducers({ activity: activityReducers });
