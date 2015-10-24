import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

var Modal = React.createClass({
	getDefaultProps: function () {
		return {
			styleClass: 'Dialog',
			allowManualClose: true
		};
	},

	getInitialState: function () {
		return {
			showModal: true
		};
	},

	render: function () {
		let onModalClick = () => {};

		if( this.props.allowManualClose ){
			onModalClick = () => {
				this.setState({
					showModal: false
				});

				// This feels very hacky. By doing this our parents won't unmount us until
				// the animations have finished.
				// @todo think of a better way?
				setTimeout( () => {
					this.props.onModalClosed();
				}, 800);				
			}
		}

		let modal = <div className={ this.props.styleClass + '_modalBackground' } key='modal' onClick={onModalClick}></div>;
	
		return (
			<div className={ this.props.styleClass }>
				<ReactCSSTransitionGroup transitionName={ this.props.styleClass } transitionAppear={true} transitionAppearTimeout={700} transitionEnterTimeout={700} transitionLeaveTimeout={700}>
					{ this.state.showModal ? modal : ''}
					{ this.state.showModal ?
						<div className={ this.props.styleClass + '_wrapper'} key='wrapper'>
							{ ( this.props.title ) ? <h1>{this.props.title}</h1> : '' }
							<div className={ this.props.styleClass + '_content' }>
								{this.props.children}
							</div>
						</div>
					: '' }
				</ReactCSSTransitionGroup>
			</div>
		)	
	}

});

export default Modal;