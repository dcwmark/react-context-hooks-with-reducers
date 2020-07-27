import { DEFAULT, ADD_BOOK, REM_BOOK } from '../constants';
import { v4 as uuid } from "node-uuid";

export const bookReducer = (state, action) => {
    const stateChanger = {
      [ADD_BOOK]: () => [...state, {
          title: action.book.title,
          author: action.book.author,
          id: uuid(),
      }],
      [REM_BOOK]: () => state.filter(book=> book.id !== action.id),
      [DEFAULT]: () => state,
    };
    return stateChanger.hasOwnProperty(action.type)
         ? stateChanger[action.type]()
         : stateChanger[DEFAULT]();
};