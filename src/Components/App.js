import React, {Component} from 'react';
import '../Styles/App.css';
import {Grid} from 'react-flexbox-grid';
import Hero from './Hero.js'
import AboutMe from './AboutMe.js'

class App extends Component {
  render() {
    return (
      <div>

        <Grid fluid className="NoPadding">
          <Hero/>
        </Grid>
        
        <Grid fluid className="NoPadding">
          <AboutMe/>
        </Grid>

      </div>
    );
  }
}

export default App;
