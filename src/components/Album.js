import React, {Component} from 'react';
import albumData from './../data/albums';
import PlayerBar from './PlayerBar';
class Album extends Component{
  constructor(props){
    super(props);

    const album = albumData.find( album => {
      return album.slug === this.props.match.params.slug
    });

    this.state = {
      album: album,
      currentSong: null,
      currentTime: null,
      displayTime: null,
      displayDuration: 0,
      duration: album.songs[0].duration,
      isPlaying: false,
      volume: 0,
      isHovered: 0
    };


    this.audioElement = document.createElement('audio');
    this.audioElement.src = null;
  }


  play(){
    this.audioElement.play();
    this.setState({isPlaying: true});
  }

  pause(){
    this.audioElement.pause();
    this.setState({isPlaying: false});
  }

  componentDidMount(){
    this.eventListeners={
      timeupdate: e =>{
        this.setState({ currentTime: this.audioElement.currentTime });
      },
      durationchange: e => {
        this.setState({duration: this.audioElement.duration});
      },
      volumechange: e => {
        this.setState({volume: this.audioElement.volume});
      }


    };
    this.audioElement.addEventListener('timeupdate', this.eventListeners.timeupdate);
    this.audioElement.addEventListener('durationchange', this.eventListeners.durationchnage);
    this.audioElement.addEventListener('volumechange', this.eventListeners.volumechange);




  }

  componentWillUnmount () {
    this.audioElement.src = null;
    this.audioElement.removeEventListener('timeupdate', this.eventListeners.timeupdate);
    this.audioElement.removeEventListener('durationchange', this.eventListeners.durationchange);
    this.audioElement.removeEventListener('volumechange', this.eventListeners.volumechange);
  }

  formatTime(time)
  {
    if(time > 0)
    {
      var tempMin = time / 60;
      tempMin = parseInt(tempMin);
      var minutes = tempMin.toString();
      var tempSeconds = time % 60;
      tempSeconds = parseInt(tempSeconds);
      if (tempSeconds < 60 && tempSeconds > 9)
      {
        var seconds = tempSeconds.toString();
      }
      else if(tempSeconds < 10 && tempSeconds >0)
      {
        seconds = "0" + tempSeconds.toString();
      }
      else
      {
        seconds = "00"
      }
      return minutes + ":" + seconds
    }
    else
    {
      return "-:--";
    }
  }


  setSong(song){
    this.audioElement.src = song.audioSrc;
    this.setState({currentSong: song});
  }

  handleSongClick(song){
    const isSameSong = this.state.currentSong === song;
    if (this.state.isPlaying && isSameSong){
      this.pause();
    }else{
      if (!isSameSong){this.setSong(song);}
      this.play();
    }
  }

  handlePrevClick(){
    const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
    const newIndex = Math.max(0, currentIndex - 1);
    const newSong = this.state.album.songs[newIndex];
    this.setSong(newSong);
    this.play();
  }

  handleNextClick(){
    const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
    const newIndex = Math.min(currentIndex+1, this.state.album.songs.length-1);
    const newSong = this.state.album.songs[newIndex];
    this.setSong(newSong);
    this.play();
  }

  handleTimeChange(e) {
    const newTime = this.audioElement.duration * e.target.value || 0;
    this.audioElement.currentTime = newTime;
    this.setState({ currentTime: newTime });
  }

  handleVolumeChange(e){
    const newVolume = e.target.value;
    this.audioElement.volume = newVolume;
    this.setState({ volume: newVolume});
  }

  render(){
    return(
      <section className="album flexParentAlbum">
        <section id="album-info" className="flexChildAlbum">
          <img id="album-cover-art" src={this.state.album.albumCover} alt={this.state.album.title}/>
          <div className="album-details">
            <h1 id="album-title">{this.state.album.title}</h1>
            <h2 className="artist">{this.state.album.artist}</h2>
            <div id="release-info">{this.state.album.releaseInfo}</div>
          </div>
        </section>
        <section id="songAndPlayer"className="flexChildAlbum">
          <div className="table-bg f">
            <table id="song-list">
              <colgroup>
              <col id="song-number-column" />
              <col id="song-title-column" />
              <col id="song-duration-column"/>
              </colgroup>
              <tbody>
              {this.state.album.songs.map((song, index) =>
                <tr className="song" key={index} onClick={()=>this.handleSongClick(song)} onMouseEnter={()=> this.setState({isHovered : index+1})} onMouseLeave={()=> this.setState({isHovered: false})}>
                  <td className="song-actions">
                    <button>
                    {
                      (this.state.currentSong && this.state.currentSong.title === song.title) ?
                      <span className={this.state.isPlaying ? "ion-ios-pause" : "ion-ios-play"}></span>
                      :
                      (this.state.isHovered === index+1) ?
                      <span className="ion-ios-play"></span>
                      :
                      <span className="song-number">{index+1}</span>
                    }
                    </button>
                  </td>
                  <td id="song-title">{song.title}</td>
                  <td>{this.formatTime(song.duration)}</td>
                </tr>
              )}
              </tbody>

            </table>
          </div>


          <PlayerBar
          isPlaying={this.state.isPlaying}
          currentSong={this.state.currentSong}
          currentTime={(this.audioElement.currentTime)}
          displayTime={this.formatTime(this.audioElement.currentTime)}
          displayDuration={this.formatTime(this.audioElement.duration)}
          duration={(this.audioElement.duration)}
          volume={this.audioElement.volume}
          handleSongClick={()=>this.handleSongClick(this.state.currentSong)}
          handlePrevClick={()=>this.handlePrevClick()}
          handleNextClick={()=>this.handleNextClick()}
          handleTimeChange={(e)=> this.handleTimeChange(e)}
          handleVolumeChange={(e)=> this.handleVolumeChange(e)}
          />
        </section>
      </section>

    );
  }
}
export default Album;
