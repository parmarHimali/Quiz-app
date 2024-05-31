import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { answerActions } from "../store/answerSlice";

const OptionButton = ({ option, idx }) => {
  const dispatch = useDispatch();
  const ANSWER = useSelector((state) => state.answer);

  const handleAnswer = () => {
    if (option.isCorrect) {
      //{text: 'Jupiter', isCorrect: true} -->selected true option
      dispatch(answerActions.setIsCorrect(true));
      dispatch(answerActions.incrementTotal());
    } else {
      //{text: 'Earth', isCorrect: false} --> selected wrong option
      dispatch(answerActions.decrementTotal());
      dispatch(answerActions.setIsCorrect(false));
    }
    dispatch(answerActions.setSelectedOptionIdx(idx));

    setTimeout(() => {
      dispatch(answerActions.incrementCurrQue());
      dispatch(answerActions.resetIsCorrect());
      dispatch(answerActions.resetSelectedOptionIdx());
    }, 700);
  };

  let btnClass = "btn btn-dark mb-3";
  if (idx === ANSWER.selectedOptionIdx) {
    btnClass = ANSWER.correct ? "btn btn-success mb-3" : "btn btn-danger mb-3";
  }

  return (
    <button
      className={btnClass}
      onClick={handleAnswer}
      disabled={ANSWER.selectedOptionIdx !== null}
    >
      {option.text}
    </button>
  );
};

export default OptionButton;
