import React from 'react';
import Header from './Header';
import LabelsList from './Labels/LabelsList';
import RecipesList from './Recipes/RecipesList';
import Recipe from './Recipe/Recipe';
import EditRecipe from './EditRecipe/EditRecipe';

var AppLayout = React.createClass({
	render: function () {
		return (
			<div className='App'>
				<div className={'App-body ' + ( this.props.appState.editingRecipe ? 'is-modal' : '' )}>
					<Header />
					<div className='App-layout'>
						<LabelsList 
							labels={this.props.labels}
							selectedLabel={this.props.appState.selectedLabel}
							labelActions={this.props.labelActions}
							appActions={this.props.appStateActions} />
						<RecipesList 
							recipes={this.props.recipes}
							selectedLabel={this.props.appState.selectedLabel}
							selectedRecipe={this.props.appState.selectedRecipe}
							recipeActions={this.props.recipeActions}
							appActions={this.props.appStateActions} />
						<Recipe
							recipe={this.props.recipe}
							recipeActions={this.props.recipeActions}
							appActions={this.props.appStateActions} />
					</div>
				</div>

				{ (this.props.appState.editingRecipe) ? <EditRecipe appActions={this.props.appStateActions} /> : ''}
			</div>
		)
	}
});

export default AppLayout;