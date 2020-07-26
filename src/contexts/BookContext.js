import React, { createContext, useReducer } from 'react';
import { v4 as uuid } from "node-uuid";
import { bookReducer } from '../reducers/bookReducer';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, dispatch] = useReducer(bookReducer, []);
  return (
    <BookContext.Provider value={{ books, dispatch }}>
        { props.children }
    </BookContext.Provider>
  );
};

export default BookContextProvider;
