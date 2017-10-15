import React, {Component} from 'react';
import '../Styles/App.css';
import '../Styles/Rates.css';
import {Row, Col} from 'react-flexbox-grid';

class Rates extends Component {
  render() {
    return (
      <div>
        <Row>

          <Col xs={12} className="ScheduleLayout">
            <div className="PageTitle MyTours">
              Rates
            </div>

          <Row>
          <Col xs={6} sm={6} md={3} lg={3}>
          <div className="RateCard">
            <div className="EmojiStyle Candy"></div><br></br>
            <div className="TimeLimitStyle">1 Hour</div><br></br>
            <div className="IncallStyle">300USD<br></br>Incall</div><br></br>
            <div className="OutcallStyle">400USD<br></br>Outcall</div><br></br>
          </div>
          </Col>
          <Col xs={6} sm={6} md={3} lg={3}>
          <div className="RateCard">
            <div className="EmojiStyle Lollipop"></div><br></br>
            <div className="TimeLimitStyle">2 Hours</div><br></br>
            <div className="IncallStyle">500USD<br></br>Incall</div><br></br>
            <div className="OutcallStyle">700USD<br></br>Outcall</div><br></br>
          </div>
          </Col>
          <Col xs={6} sm={6} md={3} lg={3}>
          <div className="RateCard">
            <div className="EmojiStyle Icecream"></div><br></br>
            <div className="TimeLimitStyle">3 Hours</div><br></br>
            <div className="IncallStyle">800USD<br></br>Incall</div><br></br>
            <div className="OutcallStyle">1000USD<br></br>Outcall</div><br></br>
          </div>
          </Col>
          <Col xs={6} sm={6} md={3} lg={3}>
          <div className="RateCard">
            <div className="EmojiStyle Champagne"></div><br></br>
            <div className="TimeLimitStyle">Overnight</div><br></br>
            <div className="IncallStyle">No<br></br>Incall</div><br></br>
            <div className="OutcallStyle">2000USD<br></br>Outcall</div><br></br>
          </div>
          </Col>

          </Row>



          </Col>

        </Row>
        <br></br>
      </div>
    );
  }
}

export default Rates;
