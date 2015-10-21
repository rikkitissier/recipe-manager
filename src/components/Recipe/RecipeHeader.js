import React from 'react';

var ReactHeader = React.createClass({
	render: function () {
		return (
			<div className='App-recipe-header' style={{backgroundImage: 'url(' + this.props.recipe.photos[0] + ')'}}>
				<h1>{this.props.recipe.title}</h1>
			</div>
		);
	}
});

export default ReactHeader;