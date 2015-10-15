import { combineReducers } from 'redux';
import labels from './labels';
import recipes from './recipes';
import appState from './appState';

export default combineReducers({
	labels,
	recipes,
	appState
});