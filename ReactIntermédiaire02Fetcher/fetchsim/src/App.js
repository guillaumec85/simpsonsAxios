import React from 'react';
import QuoteCard from './QuoteCard';
import axios from "axios";

function App() {
  const [quotes, setquotes] = React.useState("");

  const getQuotes = () => {
    axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes")
      .then((res) => res.data)
      .then((data) => {
        setquotes(data[0]);
      });
  };


  return (
    <div>
      <button onClick={getQuotes}>
        citation Simpson 
      </button>
      <QuoteCard  {...quotes} />
    </div>
  );
}

export default App;
