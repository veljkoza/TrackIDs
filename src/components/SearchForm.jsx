import React from "react";
import SearchVideo from "./SearchVideo";
import FindBtn from "./FindBtn"

class SearchForm extends React.Component {
    constructor() {
      super();
      this.state = {};
    }
  
    render() {
      return (
        <div className="search-form">
            <SearchVideo/>
            <FindBtn/>
        </div>
      );
    }
  }
  
  export default SearchForm;