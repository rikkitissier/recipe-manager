import * as types from '../constants/ActionTypes';

export function addLabel(name, slug, id) {
    return {
        type: types.ADD_LABEL,
        slug,
        id
    };
}

export function deleteLabel(id) {
    return {
        type: types.DELETE_LABEL,
        id
    };
}