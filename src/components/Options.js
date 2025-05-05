import React from "react";
import { useQuiz } from "../context/QuizContext";

export default function Options({ question }) {
    const { answer, dispatch } = useQuiz();
    const hasAnswered = answer !== null;
    return (
        <div className="options">
            {question.options.map((option, i) => (
                <button
                    key={option}
                    className={`btn btn-option ${
                        i === answer ? "answer" : ""
                    } ${
                        hasAnswered
                            ? i === question.correctOption
                                ? "correct"
                                : "wrong"
                            : ""
                    }`}
                    disabled={hasAnswered}
                    onClick={() => dispatch({ type: "newAnswer", payload: i })}
                >
                    {option}
                </button>
            ))}
        </div>
    );
}
