import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListItem } from 'material-ui/List';
import { Link } from 'react-router-dom';

import './BoardTile.css';

class BoardTile extends Component {

	render() {
		const style = {
			backgroundImage: `url(${this.props.backgroundImage})`,
		}
		return (
			<ListItem>
				<Link className='board-tile mod-unknown-background' to={this.props.url} style={style}>
					<span className='board-tile-fade'></span>
					<span className='board-tile-details is-badged'>
						<span title={this.props.name} dir='auto' className='board-tile-details-name'>{this.props.name}</span>
					</span>
				</Link>
				<div className='board-tags u-clearfix'></div>
			</ListItem>
		);
	}
}

function mapStateToProps(state, props) {
	const { boards } = state.boards;

	if (!boards) {
		return {};
	}

	const board = boards[props.id];

	if (!board) {
		return {};
	}

	let backgroundImage = board.prefs.backgroundImage;

	if (board.prefs.backgroundImageScaled) {
		let closest = null;

		board.prefs.backgroundImageScaled.forEach((element) => {
			if (!closest || (element.width < closest.width || element.height < closest.height)) {
				closest = element;
			}
		});

		if (closest) {
			backgroundImage = closest.url;
		}
	}

	return {
		backgroundImage: backgroundImage,
		name: board.name,
		url: `/b/${board.shortLink}`,
	};
}

export default connect(mapStateToProps)(BoardTile);
