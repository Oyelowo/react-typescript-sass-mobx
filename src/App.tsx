import React, { Component } from "react";
import "./App.scss";
import axios from "axios";
import MovieCard from "./components/MovieCard";



class App extends Component<{},{}> {
  render() {

    return (
      <>
       <MovieCard />
      </>
    );
  }
}

export default App;
