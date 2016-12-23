import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
const API_KEY = 'AIzaSyAQaEnhcb-0IJhhTWBQHlpTtoCpwXpIXa8';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videos: []
		};

		this.videoSearch('trailers 2017');
	}

	videoSearch (term) {
		YTSearch({key: API_KEY, term: term}, (videos)  => {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
		})
	}
	render () {
		var me = this;

		const videoSearch = _.debounce((term) => {
			me.videoSearch(term);
		}, 300);
		return (
			<div>
				<SearchBar
					onSearchTermChange={(term) => videoSearch(term)}
				/>
				<VideoDetail video={this.state.selectedVideo}/>
				<VideoList 
					videos={this.state.videos}
					onVideoSelect={(selectedVideo) => this.setState({selectedVideo})}
				/>
			</div>
		)
	}
}


ReactDOM.render(<App />, document.querySelector('.container'));