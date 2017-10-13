import React, {Component} from 'react';
import '../Styles/Hero.css';
import {Row, Col} from 'react-flexbox-grid';

class Hero extends Component {
  render() {
    return (
      <div>
        <Row className="FullScreenHeight">
          <Col xs={12} sm={12} md={7} className="Menu">
            <div>
              <div className="UserNameStyle">Melissa</div>
              <br></br>
              <div className="TinyDescStyle">International luxury model</div>
              <br></br>
              <br></br>
              <div className="CandyButts OrangeGradient">About me</div>
              <br></br>
              <br></br>
              <div className="CandyButts PinkBlueGradient">Gallery</div>
              <br></br>
              <br></br>
              <div className="CandyButts BlueVioletGradient">Schedule</div>
              <br></br>
              <br></br>
              <div className="CandyButts AquaGradient">Rates</div>
              <br></br>
              <br></br>
              <div className="CandyButts VioletOrangeGradient">Contact</div>
            </div>
          </Col>
          <Col xs={0} sm={0} md={5}>
            <div className="HeroImage"></div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Hero;
