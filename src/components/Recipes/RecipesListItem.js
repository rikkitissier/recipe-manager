import React from 'react';

var RecipesListItem = React.createClass({
	render: function () {
		let cssClasses = ['App-recipes-item'];

		if( this.props.selected ){
			cssClasses.push('is-active');
		}

		if( this.props.fave ){
			cssClasses.push('is-fave');
		}

		return (
			<li className={cssClasses.join(' ')} onClick={() => { this.props.selectRecipe( this.props.id, this.props.labels ) }}>
				<div style={{backgroundImage: 'url(' + this.props.photo + ')' }} className='App-recipes-item-photo'></div>
				<div>
					<h4>{this.props.title}</h4>
					<p><small>Prep time: {this.props.prep}</small></p>
					{( this.props.fave ) ? <span className='fa fa-heart'></span> : ''}
				</div>
			</li>
		)
	}
});

export default RecipesListItem;