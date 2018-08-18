import React, { Component } from 'react';
import axios from "axios";
import _ from "lodash";


const API_KEY = 'AIzaSyDDNFSGg65vFIGfiAkN94LqKxRaOPdvVfI';


export default class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            term: 'surfboard',
            order: 'viewCount'
        };
    }

    toggleOrder() {
        var order = this.state.order;
        if (order === "viewCount") {
            order = "date";
        } else {
            order = "viewCount";
        }
        this.setState({ order });
    }

    async componentDidMount() {
        await this.searchVideos();
    }

    async searchVideos() {

        var response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&order=${this.state.order}&q=${this.state.term}&type=video&key=${API_KEY}`)
        var videos = response.data.items;

        await Promise.all(_.map(videos, async video => {

            var result = await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${video.id.videoId}&key=${API_KEY}`);
            video.viewCount = result.data.items[0].statistics.viewCount;
        }));

        this.props.onVidoesFound(videos);
    }

    render() {
        return (<form className="search-bar js--section-search"
            onSubmit={(e) => {
                e.preventDefault();
                this.searchVideos();
            }}
        >
            <input type='text'
                value={this.state.term}
                onChange={e => this.setState({ term: e.target.value })}
            />
            <div>
                <div className="radio-group">
                    <input type="radio"
                        checked={this.state.order === "viewCount"}
                        className="radio-group__radio-input"
                        id="views"
                        name="order"
                        onChange={() => this.toggleOrder()}
                    />
                    <label htmlFor="views" className="radio-group__radio-label">
                        <span className="radio-group__radio-button"></span>
                        Order By Views
                  </label>
                </div>

                <div className="radio-group">
                    <input
                        type="radio"
                        checked={this.state.order === "date"}
                        className="radio-group__radio-input"
                        id="date"
                        name="order"
                        onChange={() => this.toggleOrder()}
                    />
                    <label htmlFor="date" className="radio-group__radio-label">
                        <span className="radio-group__radio-button"></span>
                        Order By Date
                 </label>
                </div>


            </div>


            <button type="submit">
                <svg className='icon'>
                    <use xlinkHref='img/sprite.svg#icon-search' />
                </svg>
            </button>
        </form>
        );
    }
}


