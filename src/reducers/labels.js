import * as types from '../constants/ActionTypes';
import omit from 'lodash/object/omit';
import assign from 'lodash/object/assign';
import mapValues from 'lodash/object/mapValues';
import data from '../data';

export default function labels( state = data.labels, action ){
	
	switch( action.type ){
		case types.ADD_LABEL:
			const newId = state[ state.length - 1 ].id + 1;

			return state.concat( {
				slug: 'slug',
				title: action.title,
				id: newId
			});
		default:
			return state;
	}
}