import React, {Component} from 'react';
import '../Styles/App.css';
import '../Styles/Contact.css';
import {Row, Col} from 'react-flexbox-grid';
import "../../node_modules/react-image-gallery/styles/css/image-gallery.css";

class Contact extends Component {

  render() {

    return (
      <div>
        <br></br>
        <Row className="TextCenter">
          <Col xs={12}>
            <div className="PageTitle">Contact</div>
            <br></br>
            <br></br>
            <Row>
              <Col xs={12} md={6}>
                <div className="WhatsappLogo"></div>
                <br></br>
                <div className="WhatsappDetails">Whatsapp<br></br><span className="Bold">08034648283</span></div>
                <br></br>
                <br></br>
              </Col>
              <Col xs={12} md={6}>
                <div className="LineLogo"></div>
                <br></br>
                <div className="LineDetails">Line<br></br><span className="Bold">mint.6875</span></div>
                <br></br>
                <br></br>

              </Col>
            </Row>

          </Col>
        </Row>
      </div>
    );
  }
}

export default Contact;
