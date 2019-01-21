import mobx from "mobx";
import { observable, action, computed } from "mobx";
import { IMovieCardStore } from "./types/IMovieCardStore";

class MovieCardStore implements IMovieCardStore {
  @observable text = "";
  @computed
  public get getText() {
    return this.text;
  }
  @action
  public setSearchText = (text: string): void => {
    this.text = text;
  };
}

const store = new MovieCardStore();
export default store;
