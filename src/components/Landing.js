import React from 'react';
import { Route, Link } from 'react-router-dom';
import Library from '../components/Library';

const Landing = () => (
  <div>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <meta name="description" content="CHAU.Z Music Player" />
    <meta name="author" content="Josh Daguna" />
    <title>CHAU.Z | welcome </title>
    <section id="showcase">
      <div className="container">
        <h1>Turn the Music Up!</h1>
        <p>Listen to the latest Songs</p>
        <div className="parallax" /></div>
        <Link activeclassname="linkActive" id="musicBox" to='/Library'>listen now</Link>

      <div className="arrow-container">
        <div className="container-footer">
          <span className="text-label">Explore</span>
          <svg className="arrow-circle-down bounce" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
            <path d="M1412 897q0-27-18-45l-91-91q-18-18-45-18t-45 18l-189 189v-502q0-26-19-45t-45-19h-128q-26 0-45 19t-19 45v502l-189-189q-19-19-45-19t-45 19l-91 91q-18 18-18 45t18 45l362 362 91 91q18 18 45 18t45-18l91-91 362-362q18-18 18-45zm252-1q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" fill="#fff" />
          </svg>
        </div>
      </div>
    </section>

    <section id="boxes">
      <div className="containerFlex">
        <div className="box">
           <span className="ion-ios-play-circle custom-icon"></span>
          <h3>Choose your music</h3>
          <p>Exclusive un-released songs</p>
        </div>
        <div className="box">
          <i className="ion-ios-flash custom-icon" />
          <h3>Unlimited, streaming, ad-free</h3>
          <p>No limits. No Distractions. 100% free.</p>
        </div>
        <div className="box">
          <i className="ion-ios-bicycle custom-icon" />
          <h3>Mobile enabled</h3>
          <p>Listen to CHAU.Z on the go!</p>
        </div>


      </div>
    </section>
    <div id="containerMusic">
      <Link activeclassname="linkActive" id="musicDarkBox" to='/Library'>go to music</Link>
    </div>
    <Route path="/library" component={Library}/>
  </div>
);

export default Landing;
