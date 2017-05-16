import React from 'react';
import PropTypes from 'prop-types';
import Player from './Player';
import TitleBar from './TitleBar';
import AddPlayer from  './AddPlayer';
import PlayerList from './PlayerList';


export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <TitleBar title={this.props.title} subtitle="Created by JJ Santos"/>
        <div className="wrapper">
          <PlayerList players={this.props.players}/>
          <AddPlayer/>
        </div>
      </div>
    );
  }
}


App.propTypes = {
  title: PropTypes.string.isRequired,
  players: PropTypes.array.isRequired
}
