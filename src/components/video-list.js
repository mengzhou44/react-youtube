import React from 'react';
import _ from 'lodash';


export default (props) => {

    return (<ul className="video-list">
        {_.map(props.videos, video =>
            <li
                key={video.etag}
                className="video-item"
                onClick={() => { props.onVideoSelected(video) }}
            >

                <img className="video-item__image" src={video.snippet.thumbnails.default.url} />

                <div className="video-item__title" >{video.snippet.title}</div>
            </li>)}
    </ul>)
}

