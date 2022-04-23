import questionsReducer from "./reducer/questionsReducer";
import balanceReducer from './reducer/balanceReducer';
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    questions: questionsReducer,
    balance: balanceReducer,
})

export default rootReducer;