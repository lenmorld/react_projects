import React, { useState, useEffect } from 'react'

import './Quiz.css'

const quizData = [
    {
        question: "Which one is not a primitive data type in JS",
        options: {
            a: "number",
            b: "function",
            c: "symbol",
            d: "object",
        },
        correct: "b",
    },
    {
        question: "Who is the President of US?",
        options: {
            a: "Hillary Clinton",
            b: "Donald Trump",
            c: "Taylor Swift",
            d: "Jay-Z",
        },
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        options: {
            a: "Hypertext Markup Language",
            b: "Hey Ma This Language ",
            c: "Hyperbole Tangent Mathematics Language",
            d: "Helicopters Terminals Motorboats Lamborginis",
        },
        correct: "a",
    },
    {
        question: "What year was the Internet invented?",
        options: {
            a: "1990",
            b: "1983",
            c: "1975",
            d: "1995",
        },
        correct: "b",
    },
];

export default function Survey() {
    const [questionIndex, setQuestionIndex] = useState(0)
    const [optionSelected, setOptionSelected] = useState(null)
    const [submitVisible, setSubmitVisible] = useState(false)
    const [score, setScore] = useState(0)

    function selectAnswer(e) {
        setOptionSelected(e.target.value)
        setSubmitVisible(true)
    }

    function reload() {
        setQuestionIndex(0)
        setSubmitVisible(false)
        setOptionSelected(null)
        setScore(0)
    }

    function submitAnswer() {
        // block submit if no selected answer
        // -> done by hiding submit initially and showing on selectAnswer

        // check if answer is correct, tally correct answer
        if (optionSelected === quizData[questionIndex].correct) {
            setScore(prevScore => prevScore + 1)
        }

        // go to next question
        // e.g. 5 questions, 0->4, last question is 2 going on 3
        if (questionIndex < quizData.length) {
            setQuestionIndex(currentQuestionIndex => currentQuestionIndex + 1)
            // loop
            // setQuestionIndex(0)

            // clear selected, hide submit
            setOptionSelected(null)
            setSubmitVisible(false)
        }
    }

    const quizDone = questionIndex === quizData.length;
    console.log(questionIndex, optionSelected, score, quizDone)

    return (
        <div class="container">
            <div className="main">
                {
                    quizDone ?
                        <div>
                            <h2>Congrats!</h2>
                            <h3>🎉 {score}/{quizData.length} 🍾</h3>
                        </div>
                        :
                        <React.Fragment>
                            <h2>{quizData[questionIndex].question}</h2>
                            <ul className="options">
                                {
                                    Object.keys(quizData[questionIndex].options).map(key => (
                                        <li className="option" key={key}>
                                            <label className="custom-radio">
                                                <span className="label">{quizData[questionIndex].options[key]}</span>
                                                <input type="radio" id={key} name="answer" value={key}
                                                    checked={optionSelected && optionSelected === key}
                                                    onChange={selectAnswer}
                                                />
                                                <span class="checkmark"></span>
                                            </label>
                                            {/* <label htmlFor={key}></label> */}
                                        </li>
                                    ))
                                }
                            </ul>
                        </React.Fragment>
                }
            </div>
            <div>
                {
                    quizDone ?
                        <button onClick={reload}>Reload</button> :
                        (submitVisible &&
                            <button onClick={submitAnswer}>Submit</button>
                        )
                }
            </div>
        </div>
    )
}