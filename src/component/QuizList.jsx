import React from "react";
import quizData from "../data/quizData";
import QuizCard from "./QuizCard";
const QuizList = () => {
  return (
    <div>
      <QuizCard
        key={quizData.questionText}
        questions={quizData.questions}
        title={quizData.title}
      />
    </div>
  );
};

export default QuizList;
