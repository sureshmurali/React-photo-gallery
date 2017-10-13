import React, {Component} from 'react';
import '../Styles/App.css';
import '../Styles/AboutMe.css';
import {Row, Col} from 'react-flexbox-grid';

class AboutMe extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col xs={12} sm={12} md={7} className="TextLayout">
            <div className="PageTitle">
            About me
            </div>
            <br></br>
            <div className="AboutMeText">
            Melissa welcomes you to her world of wicked debauchery. She’s a gifted courtesan, confident and sophisticated exuberating old world charm coupled with unbridled female sensuality. She has that girl next-door cheek, an X Factor demeanor with an X-rated attitude that is sure to put you immediately at ease and have your rocket tingling with delight.
            <br></br>
            <br></br>
            Melissa’s body is a temple of sin. She takes pride in her fit hourglass figure comprising of a tiny waist, shapely long legs, perky breasts and buxom bottom. She is a 24 years young mischievous sexpot with full red kissable lips and an ass worthy of a spank! Her Laos heritage is noticeable in her clear and smooth olive complexion and long raven locks of bouncy curls to an amazing peachy derrière.
            <br></br>
            <br></br>
            Her one desire is to make your illicit fantasies come true. The complete brains and bombshell package, Melissa is going to sweep you off your feet and leave you purring like a pussycat for years to come.
            So whether you are yearning for a sensual touch of fabulous company, seeking to explore your fantasies with your own private model or a couple looking to inject some spice. Miss Melissa is only a phone call away.
            </div>
          </Col>
          <Col xs={0} sm={0} md={5}>
            <div className="SecondHeroImage"></div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default AboutMe;
