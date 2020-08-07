import {LOG_IN,LOG_OUT} from "../constants/action-types";

const initialState = {
    isLoggedIn: false
};

function rootReducer(state = initialState, action){
    if (action.type === LOG_IN){
        return Object.assign({}, state, {
            isLoggedIn : true
        });
    }
    if (action.type === LOG_OUT){
        return Object.assign({}, state, {
            isLoggedIn: false
        });
    }

    return state;
};

export default rootReducer;