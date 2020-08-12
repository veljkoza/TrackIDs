import React from "react";
import SearchForm from "./SearchForm";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="main">
        <SearchForm />
      </div>
    );
  }
}

export default Main;
