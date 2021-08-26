import { createContext } from 'react';
export default createContext();


/*----------------------------
| Action Type (TOC)
----------------------------*/
const actionTypes = {
    UF_UPDATE_CONTROL: 'UF: updateControl',
}

/*----------------------------
| Action (Action Creators)
----------------------------*/
export const updateControl = (input) => {
    return {
        type: actionTypes.UF_UPDATE_CONTROL,
        input: input,
    }
}

/*----------------------------
| State Updater (reducer)
----------------------------*/
export const reducer = (state, action) => {

    switch(action.type) {
        case actionTypes.UF_UPDATE_CONTROL: {
            return {
                ...state, 
                ...action.input
            };
        }

        default: {
            return {...state}
        }
    }
}