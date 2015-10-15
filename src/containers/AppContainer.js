import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';  
import * as LabelActions from '../actions/LabelActions';
import * as RecipeActions from '../actions/RecipeActions';
import * as AppStateActions from '../actions/AppStateActions';
import AppLayout from '../components/AppLayout';

let mapStateToProps = (state) => ({
	labels: state.labels,
	recipes: state.recipes,
	appState: state.appState
});

var AppContainer = React.createClass({
	render: function () {
		const { labels, recipes, dispatch } = this.props;
		const labelActions = bindActionCreators(LabelActions, dispatch);
		const recipeActions = bindActionCreators(RecipeActions, dispatch);
		const appStateActions = bindActionCreators(AppStateActions, dispatch);

		return (
			<AppLayout 
				className='App'
				labels={labels}
				recipes={recipes}
				labelActions={labelActions}
				recipeActions={recipeActions}
				appStateActions={appStateActions} />
		)
	}
});

export default connect(mapStateToProps)(AppContainer);