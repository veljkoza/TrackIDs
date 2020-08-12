import React from "react";

class SearchVideo extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div id="search-input">
        <input type="text" placeholder="YouTube set to list songs from" />
      </div>
    );
  }
}

export default SearchVideo;
