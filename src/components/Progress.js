import React from "react";
import { useQuiz } from "../context/QuizContext";

export default function Progress() {
    const { questions, index, answer, points } = useQuiz();

    const numQuestions = questions.length;
    const maxPossiblePoints = questions.reduce(
        (acc, cur) => acc + cur.points,
        0
    );

    return (
        <header className="progress">
            <progress
                max={numQuestions}
                value={index + (answer !== null ? 1 : 0)}
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
