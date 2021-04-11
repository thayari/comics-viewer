import React, {useState, useEffect} from 'react';
import {MapInteractionCSS} from '../Map/index';

function Viewer(props) {
  const [value, setValue] = useState(props.value);
  const [defaultScale, setDefaultScale] = useState(props.value.scale);
  const [loading, setLoading] = useState(true);



  const handleImageLoaded = () => {
    const {scale, translation} = calcSize();
    setValue({scale: scale,
      translation: translation});
    setDefaultScale(scale);
    setLoading(false);
  }

  const calcSize =() => {
    const myImg = document.querySelector("#currentImage");
    const realWidth = myImg.naturalWidth;
    const realHeight = myImg.naturalHeight;

    const viewer = document.querySelector('.viewer');
    const viewerHeight = viewer.offsetHeight;
    const viewerWidth = viewer.offsetWidth;

    let scale = 1;
    let translation = { x: 0, y: 0 };

    if (realWidth/realHeight < viewerWidth/viewerHeight) {
      scale = +(viewerHeight / realHeight).toFixed(2);
    } else 
      scale = +(viewerWidth / realWidth).toFixed(2);
    
    const newHeight = realHeight * scale;
    const newWidth = realWidth * scale;

    translation.x = (viewerWidth - newWidth) / 2;
    translation.y = (viewerHeight - newHeight) / 2;

    return {scale, translation};
  }

  return (
    <MapInteractionCSS 
      value={value}
      onChange={(value) => setValue(value)}
      showControls={true}
      btnClass='btn btn-scale'
      minScale={defaultScale}
    >
      
      <img onLoad={handleImageLoaded} src={process.env.PUBLIC_URL + props.src} id="currentImage" />
    </MapInteractionCSS>
  )
  
}

export default Viewer
