import React, { Component } from 'react';

import './BoardTile.css';

class BoardTile extends Component {

	render() {
		const style = {
			backgroundImage: `url(${this.props.backgroundImage})`,
		}
		return (
			<li className='boards-page-board-section-list-item'>
				<a className='board-tile mod-unknown-background' href={this.props.url} style={style}>
					<span className='board-tile-fade'></span>
					<span className='board-tile-details is-badged'>
						<span title={this.props.name} dir='auto' className='board-tile-details-name'>{this.props.name}</span>
					</span>
				</a>
				<div className='board-tags u-clearfix'></div>
			</li>
		);
	}
}

export default BoardTile;
