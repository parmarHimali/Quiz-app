import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { answerActions } from "../store/answerSlice";

const QuizCardOptions = ({ handleAnswer, currQue, questions, setCurrQue }) => {
  const [isCorrect, setIsCorrect] = useState(null);
  const [selectedOptionIdx, setSelectedOptionIdx] = useState(null);
  const answer = useSelector((state) => state.answer);
  const dispatch = useDispatch();

  const handleButton = (ans, idx) => {
    if (questions[currQue].options[idx].isCorrect) {
      setIsCorrect(true);
      setSelectedOptionIdx(idx);
      dispatch(answerActions.correctAns());
      dispatch(answerActions.setPropertyFalse());
      console.log("The answer is correct", ans, idx);
      setTimeout(() => {
        setCurrQue(currQue + 1);
        setSelectedOptionIdx(null);
        setIsCorrect(null);
      }, 3000);
    } else {
      setIsCorrect(false);
      setSelectedOptionIdx(idx);
      dispatch(answerActions.incorrectAns());
      console.log("The answer is not correct", ans, idx);
      setTimeout(() => {
        setCurrQue(currQue + 1);
        setSelectedOptionIdx(null);
        setIsCorrect(null);
      }, 3000);
    }
  };
  return (
    <div>
      {questions[currQue].options.map((option, idx) => {
        let btnClass = "btn btn-dark mb-3";
        if (idx === selectedOptionIdx) {
          btnClass = isCorrect ? "btn btn-success mb-3" : "btn btn-danger mb-3";
        }
        return (
          <div className="card-body option">
            <button
              key={idx}
              className={btnClass}
              onClick={() => handleButton(option.text, idx)}
              disabled={selectedOptionIdx !== null}
            >
              {option.text}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default QuizCardOptions;
