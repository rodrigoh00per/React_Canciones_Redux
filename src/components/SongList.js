import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends Component {
  renderListOfSongs = () => {
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="content">{song.title}</div>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
        </div>
      );
    });
  };

  render() {
    return <div className="ui divided list">{this.renderListOfSongs()}</div>;
  }
}

const mapStateToProps = state => {
  return { songs: state.songs };
};

//connect is a function that pass in the second parenthesis the nameofthecomponent,
//because inside that function there is a return function that receive a component
export default connect(
  mapStateToProps,
  { selectSong }
)(SongList);
