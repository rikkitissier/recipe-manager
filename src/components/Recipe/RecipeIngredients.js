import React from 'react';

var RecipeIngredients = React.createClass({

	buildIngredientBlock: function (ingredients) {
		return ingredients.map( (ingredient, idx) => {
			return (
				<li key={idx}>{ingredient}</li>
			)
		})
	},

	render: function () {

		let ingredients = '';

		if( this.props.recipe.ingredients.length == 1 ){
			ingredients = (
				<ul>
					{this.buildIngredientBlock( this.props.recipe.ingredients[0].contents )}
				</ul>
			);
		} else {
			ingredients = this.props.recipe.ingredients.map( (group, idx) => {
				return (
					<div key={idx}>
						<h3>{group.title}</h3>
						<ul>
							{this.buildIngredientBlock( group.contents )}
						</ul>
					</div>
				);
			});
		}

		return (
			<div className='App-recipe-ingredients'>
				<h2>Ingredients</h2>
				{ingredients}
			</div>
		)
	}
});

export default RecipeIngredients;