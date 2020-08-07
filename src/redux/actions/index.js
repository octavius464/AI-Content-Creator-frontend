import {LOG_IN, LOG_OUT} from "../constants/action-types";


export function logIn(payload){
    return {type: LOG_IN, payload}
};

export function logOut(payload){
    return {type: LOG_OUT, payload}
};