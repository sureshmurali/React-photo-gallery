import React, {Component} from 'react';
import '../Styles/App.css';
import '../Styles/Gallery.css';
import {Row, Col} from 'react-flexbox-grid';
import ImageGallery from 'react-image-gallery';
import "../../node_modules/react-image-gallery/styles/css/image-gallery.css";

class Gallery extends Component {

  handleImageLoad(event) {
    console.log('Image loaded ', event.target)
  }

  render() {

    const images = [
      {
        original: 'https://i.imgur.com/IxJdpRj.jpg',
        thumbnail: 'https://i.imgur.com/IxJdpRjb.jpg'
      },
      {
        original: 'https://i.imgur.com/QMt7YoU.jpg',
        thumbnail: 'https://i.imgur.com/QMt7YoUb.jpg'
      },
      {
        original: 'https://i.imgur.com/pmWDm5W.jpg',
        thumbnail: 'https://i.imgur.com/pmWDm5Wb.jpg'
      },
      {
        original: 'https://i.imgur.com/ptoYtOA.jpg',
        thumbnail: 'https://i.imgur.com/ptoYtOAb.jpg'
      },
      {
        original: 'https://i.imgur.com/DgcMZom.jpg',
        thumbnail: 'https://i.imgur.com/DgcMZomb.jpg'
      },
      {
        original: 'https://i.imgur.com/IHMCobV.jpg',
        thumbnail: 'https://i.imgur.com/IHMCobVb.jpg'
      },
      {
        original: 'https://i.imgur.com/1E2yJre.jpg',
        thumbnail: 'https://i.imgur.com/1E2yJreb.jpg'
      },
      {
        original: 'https://i.imgur.com/RV4IT6O.jpg',
        thumbnail: 'https://i.imgur.com/RV4IT6Ob.jpg'
      },
      {
        original: 'https://i.imgur.com/k0eWHEx.jpg',
        thumbnail: 'https://i.imgur.com/k0eWHExb.jpg'
      },
      {
        original: 'https://i.imgur.com/g4MJoMO.jpg',
        thumbnail: 'https://i.imgur.com/g4MJoMOb.jpg'
      },
      {
        original: 'https://i.imgur.com/ECgoZdX.jpg',
        thumbnail: 'https://i.imgur.com/ECgoZdXb.jpg'
      }
    ]

    return (
      <div>
        <Row className="FullScreenHeight">
          <Col xs={12} className="GalleryLayout">
            <div className="PageTitle">Gallery</div>
            <br></br>
            <div className="GalleryPadding">
            <ImageGallery items={images} slideInterval={2000} onImageLoad={this.handleImageLoad}/>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Gallery;
