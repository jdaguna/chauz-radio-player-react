import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';
import MobileNav from './components/MobileNav.js';

class App extends Component {
  render() {
    return (
      <div className="App">
       <header>
        <nav>
            <div id="menuMobile">
              <MobileNav />
            </div>
           <Link activeclassname="linkActive" id="homeLink" to='/'>HOME</Link>
	         <Link activeclassname="linkActive" id="music" to='/Library'>MUSIC</Link>
        </nav>
        <h1 id="mainBranding">CHAU.Z  RADIO</h1>
       </header>
       <main>
          <Route exact path="/" component={Landing} />
	        <Route path="/library" component={Library}/>
	        <Route path="/album/:slug" component={Album}/>
       </main>
       <footer>
         <h1>CHAU.Z</h1>
         <h3>Copyright 2019 J.Daguna / Powered by BlocJams</h3>
         <i className="ion-logo-github custom-icon-small"/>

       </footer>
      </div>
    );
  }
}
//testing~~~~!
export default App;
