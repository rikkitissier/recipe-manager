import React from 'react';
import isUndefined from 'lodash/lang/isUndefined';
import RecipeHeader from './RecipeHeader';

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
				</div>
			)
		}
	}
});

export default Recipe;