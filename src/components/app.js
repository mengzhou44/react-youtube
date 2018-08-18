import React, { Component } from 'react';
import SearchBar from './search-bar';
import VideoList from './video-list';
import VideoDetail from './video-detail';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { videos: [], selectedVideo: null };
    }
    render() {
        return (<div>
            <SearchBar onVidoesFound={videos => this.setState({ videos, selectedVideo: videos[0] })} />
            <div className="row">
                <div className="col-md-8">
                    <VideoDetail video={this.state.selectedVideo} />
                </div>
                <div className="col-md-4">
                    <VideoList videos={this.state.videos} onVideoSelected={video => {
                        this.setState({ selectedVideo: video });

                    }} />
                </div>
            </div>

        </div>);
    }
}

export default App; 