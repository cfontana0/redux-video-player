import React, { Component } from 'react';

class VideoListItem extends Component {
	render() {
		const video = this.props.video;
		const videoImage = video.snippet.thumbnails.default.url;
		const onVideoSelect = this.props.onVideoSelect;

		return (
			<li className="list-group-item" onClick={() => onVideoSelect(video)}>
				<div className="video-list media">
					<div className="media-left">
						<img className="media-object" src={videoImage}/>
					</div>
					<div className="media-body">
						<div className="media-heading">
							{video.snippet.title}
						</div>
					</div>
				</div>
			</li>
		)
	}
}

export default VideoListItem;