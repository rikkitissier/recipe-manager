import React from 'react';
import isUndefined from 'lodash/lang/isUndefined';
import RecipeHeader from './RecipeHeader';
import RecipeIngredients from './RecipeIngredients';
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

					<div className='App-recipe-body'>
						<RecipeIngredients recipe={this.props.recipe} />
						<div className='App-recipe-directions'>
							<h2>Directions</h2>
						</div>
					</div>
				</div>
			)
		}
	}
});

export default Recipe;