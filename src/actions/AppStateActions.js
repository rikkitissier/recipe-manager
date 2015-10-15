import * as types from '../constants/ActionTypes';

export function selectLabel(id) {  
    return {
        type: types.SELECT_LABEL,
        id
    };
}