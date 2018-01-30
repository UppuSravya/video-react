import React from 'react'

const VideoDetail = (props) => {
    const video = props.clickedvideo;


    if(!video) {
        return (
            <h1>loading</h1>
        );
    }

    const videoid = video.id.videoid;
    const url = `https://www.youtube.com/embed/${videoid}`;
    return (
        <div>
        <iframe src= {url} ></iframe>
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
        </div>
    )
}

export default VideoDetail;
