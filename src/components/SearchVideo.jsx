import React from "react";

class SearchVideo extends React.Component {
  constructor(props) {
    super();
    this.state = {
      youtubeLink:"",
      linkId:"",
    };
  }

  handleChange = (e) =>{
   let youtubeLink = e.target.value;
   this.setState({youtubeLink});
   console.log(youtubeLink)
   let linkId = youtubeLink.split('=')[1];
   console.log(linkId);
   this.setState({linkId});
   this.props.getLinkId(linkId);
  }


  render() {
    return (
      <div id="search-input">
        <input onChange={this.handleChange} type="text" placeholder="YouTube set to list songs from" />
      </div>
    );
  }
}

export default SearchVideo;
