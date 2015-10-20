import * as types from '../constants/ActionTypes';
import omit from 'lodash/object/omit';
import assign from 'lodash/object/assign';
import mapValues from 'lodash/object/mapValues';
import data from '../data';

export default function appState( state = data.appState, action ){
	switch( action.type ){
		case types.SELECT_LABEL:
			// If the selected recipe doesn't belong to the new label, we also reset the selectedRecipe
			let selectedRecipe = {};

			if( action.id !== 'all' && state.selectedRecipe !== 0 && state.selectedRecipeLabels.indexOf( action.id ) === -1 ){
				selectedRecipe = {
					selectedRecipe: 0,
					selectedRecipeLabels: []
				};
			}

			return Object.assign( {}, state, { 
				selectedLabel: action.id
			}, selectedRecipe ); 
		case types.SELECT_RECIPE:
			return Object.assign( {}, state, { 
				selectedRecipe: action.id,
				selectedRecipeLabels: action.labels
			} );
		default:
			return state;
	}
}