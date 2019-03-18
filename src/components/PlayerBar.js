import React, {Component} from 'react';
class PlayerBar extends Component{
 render(){
  return(
  <section className="player-bar">
   <section id="buttons">
    <div className="buttons-wrapper">
    <button id="previous" onClick={this.props.handlePrevClick}>
     <span className="ion-ios-skip-backward"></span>
    </button>
    <button id="play-pause" onClick={this.props.handleSongClick}>
     <span className={this.props.isPlaying? 'ion-ios-pause' : 'ion-ios-play'}></span>
    </button>
    <button id="next" onClick={this.props.handleNextClick}>
     <span className="ion-ios-skip-forward"></span>
    </button>
    </div>
   </section>
   <section id="time-control">
    <div className="current-time time-control-inline" id="displayPlayTime">{this.props.displayTime}</div>
    <input
     type="range"
     className="seek-bar time-control-inline"
     value={(this.props.currentTime / this.props.duration)|| 0 }
     max="1"
     min="0"
     step="0.01"
     onChange={this.props.handleTimeChange}
    />
   <div className="total-time time-control-inline" id="displayDurationTime">{this.props.displayDuration}</div>
   </section>
   <section id="volume-control">
    <div className="ion-ios-volume-low"></div>
    <input
	type="range"
	className="seek-bar" id="volume-bar"
	value={this.props.volume || 0}
    	max="1"
	min="0"
	step="0.01"
        onChange={this.props.handleVolumeChange}
    />
    <div className="ion-ios-volume-high"></div>
   </section>
  </section>
  );
 }

}

export default PlayerBar;
