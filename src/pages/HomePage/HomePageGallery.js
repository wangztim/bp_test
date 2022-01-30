import React from 'react'
import './HomePageGallery.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';

export default function HomePageGallery() {
  return (
    <Carousel 
      id = "HomePage-carousel"
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      interval={2000}
      dynamicHeight={false}
      useKeyboardArrows={true}
      autoFocus={true}
      swipeable={true}
      emulateTouch={true}>
        <div>
            <img className="carousel-img" src="https://www.guideposts.org/sites/default/files/styles/open_graph/public/story/gettyimages-845427672.jpg" />
        </div>
        <div>
            <img className="carousel-img" src="https://iseusa.org/wp-content/uploads/2017/04/shutterstock_428931997-e1543504561281.jpg" />
        </div>
        <div>
            <img className="carousel-img" src="https://d3ayyz93zozlya.cloudfront.net/uploaded-images/articlemainimage/microvolunteering-making-a-difference-in-a-matter-of-minutes-588a3926ecd2b.jpeg" />
        </div>
    </Carousel>
  )
}

/** 
export default function HomePageGallery() {

    const images = [
        {
          original: "https://www.guideposts.org/sites/default/files/styles/open_graph/public/story/gettyimages-845427672.jpg",
        },
        {
          original: 'https://iseusa.org/wp-content/uploads/2017/04/shutterstock_428931997-e1543504561281.jpg',
        },
        {
          original: 'https://d3ayyz93zozlya.cloudfront.net/uploaded-images/articlemainimage/microvolunteering-making-a-difference-in-a-matter-of-minutes-588a3926ecd2b.jpeg'
        },
      ];
  
    return (
        <div>
          <ImageGallery id="viewgallery"
          items={images}
          showBullets = {true}
          showThumbnails = {false}
          showPlayButton={false}
          showFullscreenButton={false}
          showNav={false}
          autoPlay={true}
          />
        </div>
    )
}

*/