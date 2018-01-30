import React, { Component } from 'react';
import SearchBar from './components/video_search';
import './App.css';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const youtube_api_key = 'AIzaSyB6MdCnJ3qqlX3oYJahhuXQyBLmOfWlw4o';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            acivevideo: null,
            searchvideo: ''
        }
       this.youtubeSearch(this.state.term)
    }

    Search = (searchvideo) => {
        this.setState({searchvideo:searchvideo})
        this.youtubeSearch(this.state.searchvideo);
    }


    youtubeSearch = (search) => {
        YTSearch({key: youtube_api_key , term: this.state.searchvideo}, (data) => {
            this.setState({
                videos: data,
                activevideo: data[0]
            });
         })
    }



render() {
    // console.log('------------------------------------');
    // console.log(this.state.videos);
    // console.log('------------------------------------');
    return (
      <div>
       <SearchBar  onChangeSearch = {(searchvideo) => this.Search(searchvideo)} />
       <VideoDetail clickedvideo={this.state.activevideo} />
       <VideoList onVideoSelect = {(video) => this.setState({activevideo:video})} vfromapi = {this.state.videos} />
      </div>
    );
  }
}

export default App;
