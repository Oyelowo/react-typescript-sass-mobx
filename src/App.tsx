import React, { Component } from "react";
import "./App.scss";
import axios from "axios";
import MovieCard from "./components/MovieCard";
import Card from "./components/Card";
import {observer, inject} from 'mobx-react';


interface Iprops {
  MovieCardStore?: any
}
@inject("MovieCardStore")
@observer
class App extends Component<Iprops, {}> {
    
  handleInputChanged = (event : any) => {
    const {MovieCardStore } = this.props;
    MovieCardStore.setSearchText(event.target.value);
  }
  render() {
    const {MovieCardStore } = this.props;
    return (
      <>
        <Card />
        <MovieCard />
        <input
        value={MovieCardStore.searchText}
        onChange={this.handleInputChanged}
      />
      </>
    );
  }
}

export default App;
