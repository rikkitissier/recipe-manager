import React from 'react';
import AppContainer from './AppContainer';
import { combineReducers } from 'redux';  
import { Provider } from 'react-redux';
import { createStore, renderDevTools } from '../utils/devTools';
import reducer from '../reducers';

const store = createStore(reducer);

var App = React.createClass({
	render: function () {
		return (
			<div>
				{renderDevTools(store)}
				<Provider store={store}>
					<AppContainer />
				</Provider>
			</div>
		)
	}
});

export default App;