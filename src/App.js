import React from "react";
import Main from "./components/Main";
import "./styles/SearchForm.css";
import { connect } from "react-redux";
function App(props) {
  return (
    <div className="App">
      <Main />
      <h1 style={{ backgroundColor: "red" }}>{props.counts}--</h1>
      <button onClick={props.increment}>+</button>
      <button onClick={props.decrement}>-</button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    counts: state,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increment: () => dispatch({ type: "INCREMENT" }),
    decrement: () => dispatch({ type: "DECREMENT" }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
