import React, {useEffect, useState} from 'react';
import Button from '../Button/Button';
import Viewer from '../Viewer/Viewer';
import data from '../../data';
import BackIcon from '../svg/BackIcon'

import { useHistory } from "react-router-dom";

function ViewerSection(props) {

  const id = props.match.params.id;
  const book = data.list.filter((item) => item.id == id)[0];
  const images = book.images;
  
  const value = { 
    scale: 0.5,
    translation: { x: 0, y: 0 }
  };

    const history = useHistory();

  // const book = props.book;

  const [img, setImg] = useState({src: images[0], key: 0});
  const [left, setLeft] = useState(true);
  const [right, setRight] = useState(false)

  const handleClickLeft = () => {
    if (img.key > 0) {
      let n = img.key - 1;
      setImg({src: images[n], key: n});
      setRight(false);
    } else {
      setLeft(true)
    }
  }

  const handleClickRight = () => {
    if (img.key < images.length - 1) {
      let n = img.key + 1;
      setImg({src: images[n], key: n});
      setLeft(false);
    } else {
      setRight(true);
    }
  }

  return (
    <>
      <Viewer value={value} src={img.src} />
      
      <div className="viewer-buttons">
        <Button onClick={() => {history.goBack()}} className="btn-back">
        <svg version="1.1"  x="0px" y="0px" viewBox="0 0 60 60">
          <path d="M28.1,13.5l0,1.4l0,2.6l2.6,0.4c1,0.1,1.8,0.3,2.6,0.5c2,0.6,4,1.5,5.9,2.8c3.5,2.4,6.1,6.1,7.2,10
            c0.9,3.2,0.8,6.7-0.4,9.7c0-3.2-1-6.2-2.7-8.7c-1.9-2.7-4.5-4.7-7.4-5.7c-1.3-0.5-2.7-0.8-4.3-0.9c-0.1,0-0.2,0-0.3,0l-0.1,0
            L28,25.4l0,3.1l0,1.4l-14.2-8.3L28.1,13.5 M31.1,8.3L7.8,21.6L31,35.1l0-6.6c0,0,0.1,0,0.1,0c0,0,0,0,0.1,0c0,0,0.1,0,0.1,0
            c1.1,0.1,2.3,0.3,3.5,0.7c2.3,0.8,4.4,2.4,6,4.6c1.5,2.2,2.4,5.1,2.1,8.2c-0.2,3.2-1.7,6.5-3.9,9.7c3.5-1.5,6.8-4.2,8.9-8
            c2.1-3.8,2.7-8.8,1.3-13.4c-1.3-4.6-4.3-8.8-8.4-11.7c-2.1-1.4-4.4-2.5-6.8-3.2C33,15.2,32,15,31.1,14.9L31.1,8.3L31.1,8.3z"/>
        </svg>
      </Button>
        <Button onClick={handleClickLeft} className="btn-flip-left" disabled={left}>
          <svg version="1.1" x="0px" y="0px" viewBox="0 0 23.2 38.6" >
            <polygon points="19.6,38.6 0,18.9 18.9,0 22.5,3.6 7,18.9 23.2,35 	"/>
          </svg>
        </Button>
        <Button onClick={handleClickRight} className="btn-flip-right" disabled={right}>
          <svg version="1.1" x="0px" y="0px" viewBox="0 0 23.2 38.6" >
            <polygon points="4.2,38.6 0.7,35 16.1,19.6 0,3.5 3.5,0 23.2,19.6 	"/>
          </svg>
        </Button>
      </div>
    </>
  )
}

export default ViewerSection
