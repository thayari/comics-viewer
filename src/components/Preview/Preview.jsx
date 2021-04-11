import React from 'react';
import { Link } from 'react-router-dom';
import InfoIcon from '../svg/InfoIcon';
import ReadIcon from '../svg/ReadIcon';
;

function Preview(props) {
  const {currentPreview} = props;
  if (currentPreview != null) {
    return (
      <div className="preview">
        <div className="icons-wrapper">
          <Link className="nav-link" to={'/viewer/' + currentPreview.id}>
            <ReadIcon />
          </Link>
          <Link className="nav-link" to={'/details/' + currentPreview.id}>
            <InfoIcon />
          </Link>
        </div>
        <img className="preview-cover" src={process.env.PUBLIC_URL + currentPreview.images[0]} alt={currentPreview.title}></img>
      </div>
    )
  } else {
    return (
      <>
      </>
    )
  }
  
}

export default Preview
