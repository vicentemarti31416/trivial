import { useState } from "react";
import './App.scss';
import axios from 'axios';
import Answers from "./components/Answers";

function App() {

  const [countAnswers, setCountAnswers] = useState('');
  const [results, setResults] = useState([]);

  const getResults = () => {
    axios
      .get(`https://opentdb.com/api.php?type=multiple&amount=${countAnswers}`)
      .then(response => setResults(response.data.results))
      .catch(error => console.log(error));
  }

  const handleChangeValue = (event) => {
    setCountAnswers(event.target.value);
  }

  return (
    <div className="App">
      <div>
        <input value={countAnswers} onChange={handleChangeValue} data-function="questions-number" type="text" placeholder="how many questions do you want?" />
        <button onClick={getResults} data-function="start-game">Start game!</button>
        <Answers results={results} />
      </div>
    </div>
  );
}

export default App;
