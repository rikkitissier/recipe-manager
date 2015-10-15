import React from 'react';

var LabelsItem = React.createClass({
	render: function () {
		return (
			<li className={this.props.selected ? 'is-active' : ''} onClick={this.props.selectLabel}><i className='fa fa-folder'></i> {this.props.title}</li>
		)
	}
});

export default LabelsItem;