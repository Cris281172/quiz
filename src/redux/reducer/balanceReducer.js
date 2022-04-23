import {ADD_BALANCE} from "../types/balanceTypes";

const INITIAL_STATE = {
    balance: 1000000,
}

const balanceReducer = (state = INITIAL_STATE, action) => {
    console.log(action)
    switch(action.type){
        case ADD_BALANCE:
            return {
                ...state, balance: state.balance + action.value,
            }
        default:
            return state;
    }
}

export default balanceReducer;