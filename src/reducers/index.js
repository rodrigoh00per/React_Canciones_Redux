import { combineReducers } from "redux";

const songsReducer = () => {
  //only in this example we used static data.

  return [
    { title: "Voices", duration: "2:50" },
    {
      title: "The game",
      duration: "3:01"
    },
    {
      title: "My time is now",
      duration: "3:30"
    }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};
//combina los reducers  y regresa la data del reducer.
//para posteriormente mandarlo al Provider
export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
