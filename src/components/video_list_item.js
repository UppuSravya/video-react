import React from 'react'


const VideoListItem =(props) => {
    console.log(props);
    let video = props.videodetail;
    let imageUrl = video.snippet.thumbnails.default.url;
    return (
        <li onClick = {() => props.onSelect(video)}>
        <img src={imageUrl} />
        <br/>
        {props.videodetail.snippet.title}
        </li>
    );
}

export default VideoListItem;
