import React from 'react';
import _ from 'lodash';
import VideoItem from './video-item';

export default (props) => {

    return (<div>
        {_.map(props.videos, video =>
            <VideoItem key={video.etag} video={video} />)
        }
    </div>)
}