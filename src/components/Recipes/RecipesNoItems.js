import React from 'react';

var RecipesNoItems = React.createClass({
	render: function () {
		return (
			<p className='App-recipes-noItems'>
				There are no recipes here yet.
			</p>
		)
	}
});

export default RecipesNoItems;