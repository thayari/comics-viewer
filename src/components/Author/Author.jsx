import React from 'react';
import { Link } from 'react-router-dom';
import data from '../../data';
import ReadIcon from '../svg/ReadIcon';
import BackIcon from '../svg/BackIcon';
import dataAuthors from '../../data-authors';

function Author(props) {
  const author = props.author;

  return (
    <>
      <div className="portrait-container" 
        style={{backgroundImage: 'url('+process.env.PUBLIC_URL + author.photo+')'}}>
      </div>
      <h2>{author.name}</h2>
    </>
  )
}

export default Author;
