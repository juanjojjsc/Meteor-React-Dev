import React from 'react';
import PropTypes from 'prop-types';
import { Players } from './../api/players';

export default class Player extends React.Component {
  render() {
    //Meter variables en nombres de variables.... OJO....
    let itemClassName = `item item--position-${this.props.player.rank}`;
    let buttonClassName = `button button--round button--position-${this.props.player.rank}`;

    return (
      <div key={this.props.player._id} className={itemClassName}>
        <div className="player">
          <div>
            <h3 className="player__name">{this.props.player.name}</h3>
            <p className="player__stats">
              {this.props.player.position} place with {this.props.player.score} point(s).
            </p>
          </div>
          <div className="player__actions">
            <button className={buttonClassName} onClick={() => {
              Players.update({_id: this.props.player._id},{$inc: {score: -1}})
            }}>-1</button>
            <button className={buttonClassName} onClick={() => {
              Players.update({_id: this.props.player._id},{$inc: {score: 1}})
            }}>+1</button>
            <button className={buttonClassName} onClick={() => {Players.remove({_id: this.props.player._id})
            }}>X</button>
          </div>
        </div>
      </div>
    );
  }
}


Player.propTypes = {
  player: PropTypes.object.isRequired
}
