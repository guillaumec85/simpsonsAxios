import React, { useEffect } from 'react';
import QuoteCard from './QuoteCard';
import axios from "axios";

function App() {
  const API = "https://simpsons-quotes-api.herokuapp.com/quotes";

	const [quotes, setquotes] = React.useState("");

	const getQuotes = () => {
		axios
			.get(API)
			.then((res) => {
				setquotes(res.data.value);
			})
			.catch((err) => {
				console.error(err);
			});
	};

  
  useEffect(() => {
		getQuotes();
	}, []);

	const clickButton = () => {
		getQuotes();
	};

console.log(API)
  return (
    <div>
      <button onClick={clickButton}>
        citation Simpson 
      </button>
      <span><QuoteCard  {...setquotes} /></span>
    </div>
  );
}

export default App;
