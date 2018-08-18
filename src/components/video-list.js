import React, { Component } from 'react';
import _ from 'lodash';
import $ from 'jquery';

import { getPublishedInfo } from '../utils/date-util';
import { getStatisticsCount } from '../utils/number-util';


export default class VideoList extends Component {

    navigateTo(section) {
        this.setState({ mobileMenuOpen: false });
        $('html, body').animate({ scrollTop: $(section).offset().top }, 1000);
    }

    render() {
        return (<ul className="video-list">
            {_.map(this.props.videos, video =>
                <li
                    key={video.etag}
                    className="video-item"
                    onClick={() => {
                        this.navigateTo('.js--section-search');
                        this.props.onVideoSelected(video);
                    }}
                >
                    <img className="video-item__image" src={video.snippet.thumbnails.default.url} alt="video" />

                    <div className="video-item__info" >
                        <div className="video-item__title">{video.snippet.title} </div>
                        <div className="video-item__date">{getPublishedInfo(video.snippet.publishedAt)} </div>
                        <div className="video-item__views">{getStatisticsCount(video.viewCount)} views </div>
                    </div>
                </li>)}
        </ul>);

    }
}

