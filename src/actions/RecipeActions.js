import * as types from '../constants/ActionTypes';

export function addRecipe(data) {
    return {
        type: types.ADD_RECIPE,
        data
    };
}

export function deleteRecipe(id) {
    return {
        type: types.DELETE_RECIPE,
        id
    };
}