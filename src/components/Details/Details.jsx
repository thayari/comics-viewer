import React from 'react';
import { Link } from 'react-router-dom';
import data from '../../data';
import ReadIcon from '../svg/ReadIcon';
import BackIcon from '../svg/BackIcon';
import dataAuthors from '../../data-authors';
import Author from '../Author/Author';

function Details(props) {
  const id = props.match.params.id;
  const listAuthors = dataAuthors.list;
  const currentBook = data.list.filter((item) => item.id == id)[0];
  const currentAuthor = listAuthors.filter((item) => item.authorId == currentBook.authorId)[0];
  
  return (
    <section className="details">
      <div className="white-bg"></div>
      <Link className="back-icon" to={'/'}>
        <BackIcon/>
      </Link>
      <div className="details_author">
        <Author author={currentAuthor} />
        <Link className="read-icon" to={'/viewer/' + id}>
          <ReadIcon />
        </Link>
      </div>
      <div className="details-wrapper">
        <h1>{currentBook.title}</h1>
        <div className="details_info" dangerouslySetInnerHTML={{__html: currentBook.info}} />
      </div>
      
    </section>
  )
}

export default Details
