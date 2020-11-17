import { combineReducers } from "redux";
import { reducerColumns } from "./columns";

export default combineReducers({ columns: reducerColumns });
