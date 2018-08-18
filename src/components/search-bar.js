import React, { Component } from 'react';
import axios from "axios";


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

        axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&order=viewCount&q=${this.state.term}&type=video&key=${API_KEY}`)
            .then(response => {
                this.props.onVidoesFound(response.data.items);
            });

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


