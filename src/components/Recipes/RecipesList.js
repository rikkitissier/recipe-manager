import React from 'react';
import RecipesListToolbar from './RecipesListToolbar';
import RecipesListItem from './RecipesListItem';
import RecipesNoItems from './RecipesNoItems';
import './recipes.less';

var RecipesList = React.createClass({
	getItems: function () {
		let items = [];

		this.props.recipes.forEach( (recipe) => {
			if( this.props.selectedLabel === 0 || recipe.labels.indexOf( this.props.selectedLabel ) !== -1 ){
				items.push( <RecipesListItem selected={this.props.selectedRecipe == recipe.id ? true : false} fave={recipe.fave} key={recipe.id} labels={recipe.labels} title={recipe.title} photo={recipe.photos[0]} prep={recipe.prep} slug={recipe.slug} id={recipe.id} {...this.props.recipeActions} {...this.props.appActions} />	);
			}	
		});

		return items;
	},

	render: function () {
		let items = this.getItems();

		return (
			<div className={ 'App-recipes ' + ( this.props.selectedRecipe ? 'has-selected' : '' )}>
				<ul>
					{items.length ? items : <RecipesNoItems />}
				</ul>
			</div>
		)
	}
});

export default RecipesList;