import React from 'react';

var ReactHeader = React.createClass({
	render: function () {
		return (
			<div>{this.props.recipe.title}</div>
		);
	}
});

export default ReactHeader;