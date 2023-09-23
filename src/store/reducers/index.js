import { combineReducers } from "redux";
import textReducer from "./textReducer";

const rootReducer = combineReducers({
    text: textReducer, //add your reducers here
})

export default rootReducer;