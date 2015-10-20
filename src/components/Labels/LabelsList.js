import React from 'react';
import mapValues from 'lodash/object/mapValues';
import LabelsItem from './LabelsItem';
import LabelsToolbar from './LabelsToolbar';
import LabelsAddItem from './LabelsAddItem';
import './labels.less';

var LabelsList = React.createClass({
	getInitialState: function () {
		return {
			addingItem: false
		};
	},

	onClickAddLabel: function () {
		this.setState({
			addingItem: true
		});
	},

	onAddKeyDown: function (e, input) {
		switch( e.key ){
			case "Enter":
				let value = e.currentTarget.value;

				this.setState({
					addingItem: false
				});

				this.props.labelActions.addLabel( value );
			case "Escape":
				this.setState({
					addingItem: false
				});
		}
	},

	render: function () {
		return (
			<div className='App-labels'>
				<ul>
					<LabelsItem 
						title='All Recipes'
						slug='all'
						id={0}
						selected={this.props.selectedLabel === 0 ? true : false}
						{...this.props.appActions} />
					{
						this.props.labels.map( (label) => {
							return (
								<LabelsItem 
									key={label.id}
									title={label.title}
									slug={label.slug}
									id={label.id}
									selected={this.props.selectedLabel == label.id ? true : false}
									{...this.props.labelActions}
									{...this.props.appActions} />
							)
						}) 
					}
					{this.state.addingItem ? <LabelsAddItem onAddKeyDown={this.onAddKeyDown} /> : ''}
				</ul>
				<LabelsToolbar onClickAddLabel={this.onClickAddLabel} {...this.props.actions} />
			</div>
		)
	}
});

export default LabelsList;