import React from 'react';
import Modal from '../Global/Modal';

var EditRecipe = React.createClass({
	render: function () {
		return (
			<Modal onModalClosed={this.props.appActions.editRecipe.bind(0)}>
				<h1>Edit recipe</h1>
			</Modal>
		);
	}
});

export default EditRecipe;