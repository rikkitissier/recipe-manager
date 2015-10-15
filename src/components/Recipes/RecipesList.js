import React from 'react';
import RecipesListToolbar from './RecipesListToolbar';
import RecipesListItem from './RecipesListItem';
import './recipes.less';

var RecipesList = React.createClass({
	render: function () {
		return (
			<div className='App-recipes'>
				<RecipesListToolbar {...this.props.actions} />
				<ul>
					{
						this.props.recipes.map( (recipe) => {
							return <RecipesListItem key={recipe.id} title={recipe.title} photo={recipe.photos[0]} prep={recipe.prep} slug={recipe.slug} id={recipe.id} {...this.props.recipeActions} {...this.props.appActions} />
						}) 
					}
				</ul>
			</div>
		)
	}
});

export default RecipesList;