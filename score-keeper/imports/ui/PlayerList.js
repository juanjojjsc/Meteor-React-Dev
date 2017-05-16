import React from 'react';
import FlipMove from 'react-flip-move';
import PropTypes from 'prop-types';
import Player from './Player';


export default class PlayerList extends React.Component {

  renderPlayers() {
    //Conditonal rendering
    if (this.props.players.length === 0) {
      return (
        <div className="item">
          <p className="item__start-message">Add a new Player!</p>
        </div>
      );
    } else {
      return this.props.players.map((player) => {
        return <Player key={player._id} player={player}/>;
      });
    }
  }

  render() {
    return (
      <div>
        <FlipMove maintainContainerHeight={true}>
          {this.renderPlayers()}
        </FlipMove>
      </div>
    );
  }
}


PlayerList.propTypes = {
  players: PropTypes.array.isRequired
}
