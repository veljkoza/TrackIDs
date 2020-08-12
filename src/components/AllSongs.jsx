import React from "react";

const AllSongs = (props) => {
  return (
    <div className="all-songs">
      {props.songs.map((song) => {
        return (
          <div className="song-info-wrapper">
            <div className="song-info">
              <p>{song.time}</p>
              <span className="line-span"></span>
              <p>{song.name}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllSongs;
