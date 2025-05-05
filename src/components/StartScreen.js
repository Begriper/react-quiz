import React from "react";
import { useQuiz } from "../context/QuizContext";

export default function StartScreen() {
    const { questions, dispatch } = useQuiz();
    const numQuestions = questions.length;
    return (
        <div className="start">
            <h2>Welcome to The React Quiz!</h2>
            <h3>{numQuestions} questions to test your React mastery</h3>
            <button
                className="btn btn-ui"
                onClick={() => dispatch({ type: "start" })}
            >
                Let's start
            </button>
        </div>
    );
}
