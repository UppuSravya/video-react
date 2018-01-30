import React from 'react'
import VideoListItem from './video_list_item'
// class VideoList extends Component {
//     render() {
//         console.log('------------------------------------');
//         console.log(this.props.vfromapi);
//         console.log('------------------------------------');
//         return(
//             <h1>this is video list</h1>
//         );
//     }
// }

/* or */
const VideoList = (props) => {

    /*mapping vfromapi to eachvideo list item through map function*/
    /*each video has unique etag*/
        let VideoListItems = props.vfromapi.map((eachvideo) => {
        return <VideoListItem key={eachvideo.etag} onSelect={props.onVideoSelect} videodetail={eachvideo}/>
    })
    return (
        <ul>
        {VideoListItems}
        </ul>
    )
}







export default VideoList;
