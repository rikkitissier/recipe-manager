import React from 'react';

var LabelsToolbar = React.createClass({

	render: function () {
		return (
			<div className='App-labels-toolbar'>
				<a href='#'><i className='fa fa-plus'></i></a>
				<a href='#'><i className='fa fa-pencil'></i></a>
			</div>
		)
	}
});

export default LabelsToolbar;