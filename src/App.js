import React from "react";
import BookContextProvider from "./contexts/BookContext";
import Navbar from "./components/NavBar";
import BookList from "./components/BookList";

const App = () => {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList />
      </BookContextProvider>
    </div>
  );
};

export default App;