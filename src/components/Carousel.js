import React from "react";

import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "https://images.unsplash.com/photo-1576982832772-9dc1779033a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3906&q=80",
    thumbnail: "https://picsum.photos/id/1018/250/150/"
  },
  {
    original: "https://images.unsplash.com/photo-1529007328922-d323f83de273?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3900&q=80",
    thumbnail: "https://picsum.photos/id/1015/250/150/"
  },
  {
    original: "https://images.unsplash.com/photo-1569098362351-88dbbfce7880?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3910&q=80",
    thumbnail: "https://picsum.photos/id/1019/250/150/"
  }
];

class Carousel extends React.Component {
  render() {
    return (
      <div className="slider-container">
        <ImageGallery
          items={images}
          showThumbnails={false}
          showFullscreenButton={false}
          showPlayButton={false}
          showBullets={true}
        />
      </div>
    );
  }
}

export default Carousel;
