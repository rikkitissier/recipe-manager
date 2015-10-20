import * as types from '../constants/ActionTypes';

export function addLabel(title) {
    return {
        type: types.ADD_LABEL,
        title
    };
}

export function deleteLabel(id) {
    return {
        type: types.DELETE_LABEL,
        id
    };
}