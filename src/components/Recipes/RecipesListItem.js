import React from 'react';

var RecipesListItem = React.createClass({
	render: function () {
		return (
			<li className='App-recipes-item'>
				<img src={this.props.photo} className='App-recipes-item-photo' />
				<div>
					<h4>{this.props.title}</h4>
					<p><small>Prep time: {this.props.prep}</small></p>
				</div>
			</li>
		)
	}
});

export default RecipesListItem;