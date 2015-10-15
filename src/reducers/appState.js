import * as types from '../constants/ActionTypes';
import omit from 'lodash/object/omit';
import assign from 'lodash/object/assign';
import mapValues from 'lodash/object/mapValues';
import data from '../data';

export default function appState( state = data.appState, action ){
	switch( action.type ){
		case types.SELECT_LABEL:
			return Object.assign( {}, state, { selectedLabel: action.id } );
		default:
			return state;
	}
}