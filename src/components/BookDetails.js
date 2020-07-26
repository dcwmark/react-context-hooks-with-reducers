import React, { useContext } from 'react';
import { REM_BOOK } from '../constants';
import { BookContext } from '../contexts/BookContext';

const BookDetails = ({ book }) => {
  const { dispatch } = useContext(BookContext);
  return (
    <li onClick={ () => dispatch({
                          type: REM_BOOK,
                          id: book.id,
                        })
    }>
      <span className="title">{book.title}</span>
      <br />
      <span className="author">{book.author}</span>
    </li>
  );
};

export default BookDetails;
