import React from "react";
import SearchVideo from "./SearchVideo";
import FindBtn from "./FindBtn";
import AllSongs from "./AllSongs";
import Axios from "axios";

const songs = [
  { time: 3.23, name: "Test name" },
  { time: 3.23, name: "Test name" },
  { time: 3.23, name: "Test name" },
  { time: 3.23, name: "Test name" },
  { time: 3.23, name: "Test name" },
];

class SearchForm extends React.Component {
  constructor() {
    super();
    this.state = {
      showSongs: [],
      songs: [],
      linkId:"",
    };

  }

  getSongs = () => {
    Axios.get(`https://youtube-video-info.p.rapidapi.com/video_formats?video=${this.state.linkId}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "youtube-video-info.p.rapidapi.com",
        "x-rapidapi-key": "b3071fb829msha09abfd4c5a24dep19a5b1jsne43ce7980b41"
      }
    })
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.log(err);
    });
  };

  listSongs = () => {
    const showSongs = songs.map((song) => {
      return (
        <div className="song-info">
          <p>{song.time}</p>
          <span className="line-span"></span>
          <p>{song.name}</p>
        </div>
      );
    });
    console.log(showSongs);
    this.setState({ showSongs });
    this.setState({ songs });
    console.log(this.state);
    return showSongs;
  };

  getLinkId=(linkId)=>{
    this.setState({linkId},()=>{
      console.log(this.state)
    })
  }

  render() {
    return (
      <div className="search-form">
        <div className="search-first-part">
          <SearchVideo getLinkId={this.getLinkId}/>
          <FindBtn listSongs={this.listSongs} getSongs={this.getSongs}/>
        </div>
        <AllSongs songs={this.state.songs} />
      </div>
    );
  }
}

export default SearchForm;
