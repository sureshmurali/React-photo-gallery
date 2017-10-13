import React, {Component} from 'react';
import '../Styles/Hero.css';
import {Row, Col} from 'react-flexbox-grid';

class Hero extends Component {
  render() {
    return (
      <Row className="FullScreenHeight">
        <Col xs={12} sm={12} md={6} className="Menu">
          <div className="UserNameStyle">Melissa</div>
          <br></br>
          <div className="TinyDescStyle">International luxury model</div>
        </Col>
        <Col xs={12} sm={12} md={6}>
          <div className="HeroImage"></div>
        </Col>
      </Row>
    );
  }
}

export default Hero;
