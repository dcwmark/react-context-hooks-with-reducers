import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookForm = () => {
  const { addBook } = useContext(BookContext);
  const [ title, setTitle ] = useState('');
  const [ author, setAuthor ] = useState('');
  return (
    <form>
      <input type="text" placeholder="book title" value={ title } />
    </form>
  );
};

export default BookForm;
