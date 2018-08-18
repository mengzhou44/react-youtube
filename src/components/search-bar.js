import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';


const API_KEY = 'AIzaSyDDNFSGg65vFIGfiAkN94LqKxRaOPdvVfI';


export default class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            term: 'surfboard'
        };
    }

    componentDidMount() {
        this.searchVideos();
    }

    searchVideos() {
        YTSearch({ key: API_KEY, term: this.state.term }, (videos) => {
            this.props.onVidoesFound(videos);
        })
    }

    render() {
        return (
            <div className="search-bar">
                <input type='text'
                    value={this.state.term}
                    onChange={e => this.setState({ term: e.target.value })}
                />
                <button onClick={() => this.searchVideos()}>
                    Search
                </button>

            </div>
        );
    }
}


