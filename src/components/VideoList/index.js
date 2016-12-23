import React, { Component } from 'react';
import VideoListItem from '../VideoListItem';

class VideoList extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const props = this.props;
		const videoItems = props.videos.map((item) => {
			return (
				<VideoListItem 
					onVideoSelect={props.onVideoSelect}
					key={item.id.videoId}
					video={item}
				/>
			)
		});

		return (
			<ul className="col-md-4 list-group">
				{videoItems}
			</ul>
		)
	}
}

export default VideoList;