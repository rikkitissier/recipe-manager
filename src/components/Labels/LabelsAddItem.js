import React from 'react';

var LabelsAddItem = React.createClass({
	componentDidMount: function () {
		this.inputRef.focus();
	},

	render: function () {
		return (
			<li>
				<i className='fa fa-folder'></i> <input type='text' placeholder='Label name' ref={(ref) => { this.inputRef = ref }} onKeyDown={this.props.onAddKeyDown} />
			</li>
		)
	}
});

export default LabelsAddItem;