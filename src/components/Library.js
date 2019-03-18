import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import albumData from './../data/albums';



class Library extends Component {
 constructor(props){
  super(props);
  this.state = {albums: albumData}


 }


 render(){
  return(
   <section className='library'>
     <h2 className="libraryHeader1"> Latest Albums </h2>
     <div className="flexParent">
    {/* <h1 id="librayHeader">Latest Albums</h1> */}
   {this.state.albums.map((album, index) =>
     <Link className="flexChild" to={`/album/${album.slug}`} key={index}>
     <div className="content">
        <div className="content-overlay"></div>
        <img className="content-image"src={album.albumCover} alt={album.title}/>
        <div className="content-details fadeIn-bottom">
         	     <h1>{album.title}</h1>
         	     <h2>{album.artist}</h2>
          	   <div>{album.songs.length} songs</div>
        </div>

     </div>
     </Link>
    )}
    </div>
   </section>
  );
 }
}

export default Library;
