import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookDetails = ({ book }) => {
  const { remBook } = useContext(BookContext);
  return (
    <li onClick={ () => remBook(book.id) }>
      <span className="title">{book.title}</span>
      <br />
      <span className="author">{book.author}</span>
    </li>
  );
};

export default BookDetails;
