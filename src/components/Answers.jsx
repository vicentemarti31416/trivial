import { useEffect, useState } from "react";

export default function Answers({ results }) {

    const [corrects, setCorrects] = useState([]);
    const selecteds = [];
    let acertadas = 0;

    useEffect(() => {
        const correctAnswers = results.map(result => result.correct_answer);
        setCorrects(correctAnswers);
    }, [results]);


    const addSelecteds = (selected) => {
        selecteds.push(selected);
        console.log(selecteds)
    }

    const checkGame = () => {
        for (let i = 0; i < selecteds.length; i++) {
            for (let j = 0; j < corrects.length; j++) {
                if (selecteds[i] === corrects[j]) acertadas++
            }
        }
        console.log(acertadas)
    }

    return (
        <div data-function="gameboard">
            <button onClick={checkGame} data-function="check-game">Check game</button>
            {results.map((result, index) => (
                <div key={`result-${index}`}>
                    <h2>{result.question}</h2>
                    <ul>
                        {result.incorrect_answers.map((answer, index) => (
                            <li onClick={() => addSelecteds(answer)} className="answer" key={index}>
                                {answer}
                            </li>
                        ))}
                        <li onClick={() => addSelecteds(result.correct_answer)} className="answer" key={index}>
                            {result.correct_answer}
                        </li>
                    </ul>
                </div>
            ))}
        </div>
    );
}

