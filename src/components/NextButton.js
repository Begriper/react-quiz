import React from "react";
import { useQuiz } from "../context/QuizContext";

export default function NextButton() {
    const { answer, index, questions, dispatch } = useQuiz();
    const numQuestions = questions.length;
    if (answer === null) return null;
    if (index < numQuestions - 1) {
        return (
            <button
                className="btn btn-ui"
                onClick={() => dispatch({ type: "nextQuestion" })}
            >
                Next
            </button>
        );
    }
    if (index === numQuestions - 1) {
        return (
            <button
                className="btn btn-ui"
                onClick={() => dispatch({ type: "finish" })}
            >
                Finish
            </button>
        );
    }
    return null;
}
