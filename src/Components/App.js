import React, {Component} from 'react';
import '../Styles/App.css';
import {Grid} from 'react-flexbox-grid';
import Hero from './Hero.js'
import AboutMe from './AboutMe.js'
import Gallery from './Gallery.js'
import Schedule from './Schedule.js'
import Rates from './Rates.js'
import Contact from './Contact.js'

class App extends Component {
  render() {
    return (
      <div>

        <Grid fluid className="NoPadding">
          <Hero/>
        </Grid>
        <br></br>
        <Grid fluid className="NoPadding">
          <AboutMe/>
        </Grid>
        <br></br>
        <Grid fluid className="NoPadding">
          <Gallery/>
        </Grid>
        <br></br>
        <Grid fluid>
          <Schedule/>
        </Grid>
        <br></br>
        <Grid fluid>
          <Rates/>
        </Grid>
        <Grid fluid>
          <Contact/>
        </Grid>

      </div>
    );
  }
}

export default App;
