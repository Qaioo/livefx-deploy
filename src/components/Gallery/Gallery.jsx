import React from 'react'
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";

import photos from "./photos"

import './Gallery.css'

function Gallery() {

  const [index, setIndex] = React.useState(-1);

    return (
      <>
        <div id="gallery">
          <PhotoAlbum 
            layout="rows" 
            photos={photos}
            breakpoints={[300, 576, 768, 990, 1366]}
            onClick={({ index: current }) => setIndex(current)}
          />
        </div>
        <Lightbox
            index={index}
            slides={photos}
            open={index >= 0}
            close={() => setIndex(-1)}
        />
      </> 
     );
}

export default Gallery;