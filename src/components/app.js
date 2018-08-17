import React, { Component } from 'react';
import SearchBar from './search-bar';
import VideoList from './video-list';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = { videos: [] };
    }
    render() {
        return <div>
            <SearchBar onVidoesFound={videos => this.setState({ videos })} />

            <VideoList videos={this.state.videos} />
        </div>;
    }
}

export default App; 