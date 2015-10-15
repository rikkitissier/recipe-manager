import * as types from '../constants/ActionTypes';
import omit from 'lodash/object/omit';
import assign from 'lodash/object/assign';
import mapValues from 'lodash/object/mapValues';
import data from '../data';

export default function recipes( state = data.recipes, action ){
	return state;
}