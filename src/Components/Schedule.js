import React, {Component} from 'react';
import '../Styles/App.css';
import '../Styles/Schedule.css';
import {Row, Col} from 'react-flexbox-grid';

class Schedule extends Component {
  render() {
    return (
      <div>
        <Row>

          <Col xs={12} className="ScheduleLayout">
            <div className="PageTitle MyTours">
              My Tours
            </div>

            <br></br>
            <br></br>

            <div className="ScheduleCardSpacing">
              <div className="ScheduleCard">
                <span className="CountryName">Korea trip</span>
                <span className="CityName">Seoul</span>
                <span className="ScheduleDate">November 2017</span>
              </div>
            </div>

            <br></br>

          </Col>

        </Row>
        <br></br>
      </div>
    );
  }
}

export default Schedule;
