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
				items.push( <RecipesListItem key={recipe.id} title={recipe.title} photo={recipe.photos[0]} prep={recipe.prep} slug={recipe.slug} id={recipe.id} {...this.props.recipeActions} {...this.props.appActions} />	);
			}	
		});

		return items;
	},

	render: function () {
		let items = this.getItems();

		return (
			<div className='App-recipes'>
				<RecipesListToolbar {...this.props.actions} />
				<ul>
					{items.length ? items : <RecipesNoItems />}
				</ul>
			</div>
		)
	}
});

export default RecipesList;