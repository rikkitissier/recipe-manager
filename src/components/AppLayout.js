import React from 'react';
import Header from './Header';
import LabelsList from './Labels/LabelsList';
import RecipesList from './Recipes/RecipesList';

var AppLayout = React.createClass({
	render: function () {

		return (
			<div className='App'>
				<Header />
				<div className='App-layout'>
					<LabelsList labels={this.props.labels} labelActions={this.props.labelActions} appActions={this.props.appStateActions} />
					<RecipesList recipes={this.props.recipes} recipeActions={this.props.recipeActions} appActions={this.props.appStateActions} />
					<div className='App-recipe'>A recipe</div>
				</div>
			</div>
		)
	}
});

export default AppLayout;