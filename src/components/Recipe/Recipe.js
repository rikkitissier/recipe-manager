import React from 'react';
import isUndefined from 'lodash/lang/isUndefined';
import RecipeHeader from './RecipeHeader';
import RecipeIngredients from './RecipeIngredients';
import RecipeDirections from './RecipeDirections';
import './recipe.less';

var Recipe = React.createClass({
	render: function () {
		if( isUndefined( this.props.recipe ) ){
			return (
				<div className='App-recipe'></div>
			)
		} else {
			return (
				<div className='App-recipe'>
					<RecipeHeader recipe={this.props.recipe} />

					<a href='#' onClick={() => { this.props.appActions.editRecipe( this.props.recipe.id )} }>Edit</a>

					<div className='App-recipe-body'>
						<RecipeIngredients recipe={this.props.recipe} />
						<RecipeDirections recipe={this.props.recipe} />
					</div>
				</div>
			)
		}
	}
});

export default Recipe;