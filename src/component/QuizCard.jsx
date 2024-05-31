import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { answerActions } from "../store/answerSlice";
import MessageBox from "./MessageBox";
import { MdNextPlan } from "react-icons/md";
import Question from "./Question";

const QuizCard = ({ questions, title }) => {
  const ANSWER = useSelector((state) => state.answer);
  const Que = questions[ANSWER.currQue];
  const dispatch = useDispatch();

  const handleSkip = (idx) => {
    dispatch(answerActions.setSkippedAns(idx));
    dispatch(answerActions.incrementCurrQue());
  };

  return (
    <div className="card main-card">
      <div className="card-header text-center">
        <h5 className="card-title">{title}</h5>
      </div>
      {Que ? (
        <>
          <Question question={Que} />
          <button
            type="button"
            className="btn btn-primary w-25 m-auto mt-3"
            onClick={() => handleSkip(ANSWER.currQue)}
          >
            Skip <MdNextPlan />
          </button>
          <div className="score-box">
            <span>Correct Answers: {ANSWER.totalCorrect}</span>
            <span>Incorrect Answers: {ANSWER.totalIncorrect}</span>
          </div>
        </>
      ) : (
        <MessageBox total={ANSWER.totalCorrect} len={questions.length} />
      )}
    </div>
  );
};

export default QuizCard;
