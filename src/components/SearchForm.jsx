import React from "react";
import SearchVideo from "./SearchVideo";
import FindBtn from "./FindBtn";
import AllSongs from "./AllSongs";

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
    };
  }

  getSongs = () => {};

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
    console.log(this.state.songs);
    return showSongs;
  };

  render() {
    return (
      <div className="search-form">
        <div className="search-first-part">
          <SearchVideo />
          <FindBtn listSongs={this.listSongs} />
        </div>
        <AllSongs songs={this.state.songs} />
      </div>
    );
  }
}

export default SearchForm;
