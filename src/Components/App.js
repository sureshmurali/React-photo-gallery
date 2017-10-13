import React, {Component} from 'react';
import '../Styles/App.css';
import {Grid} from 'react-flexbox-grid';
import Hero from './Hero.js'

class App extends Component {
  render() {
    return (
      <div>

        <Grid fluid className="NoPadding">
          <Hero/>
        </Grid>
        
      </div>
    );
  }
}

export default App;
