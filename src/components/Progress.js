import React from "react";
import { useQuiz } from "../context/QuizContext";

export default function Progress() {
    const { index, answer, questions, points } = useQuiz();
    const numQuestions = questions.length;
    const maxPossiblePoints = questions.reduce(
        (acc, cur) => acc + cur.points,
        0
    );
    return (
        <header className="progress">
            <progress
                max={numQuestions}
                value={index + Number(answer !== null)}
            />
            <p>
                Question <strong>{index + 1}</strong> / {numQuestions}
            </p>
            <p>
                <strong>{points}</strong> / {maxPossiblePoints}
            </p>
        </header>
    );
}
