import React from "react";
import SearchVideo from "./SearchVideo";
import FindBtn from "./FindBtn";

const FakeSongs = [
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
    };
  }

  getSongs = () => {};

  listSongs = () => {
    const showSongs = FakeSongs.map((song) => {
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
    return showSongs;
  };

  render() {
    return (
      <div className="search-form">
        <SearchVideo />
        <FindBtn listSongs={this.listSongs}/>

        
        {this.state.showSongs.map((song) => {
          return song;
        })}
      </div>
    );
  }
}

export default SearchForm;
