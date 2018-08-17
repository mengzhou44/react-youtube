import React from 'react';

export default (props) => {
    const { video } = props;

    console.log(JSON.stringify(video, null, 4));
    return (<div className="video-item">
        <div className="row">
            <div className="col-md-3" >

                <img className="video-item__image" src={video.snippet.thumbnails.default.url} alt='video' />

            </div>
            <div className="col-md-9" >
                <div className="video-item__title">
                    <span className="video-item__text">
                        {video.snippet.title}
                    </span>
                </div>
            </div>

        </div>

    </div>);
}