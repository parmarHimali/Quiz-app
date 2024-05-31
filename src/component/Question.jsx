import React from "react";
import OptionButton from "./OptionButton";

const Question = ({ question }) => {
  return (
    <>
      <div className="alert alert-primary que" role="alert">
        {question.questionText}
      </div>
      <div className="card-body option">
        {question.options.map((option, idx) => (
          <OptionButton key={idx} option={option} idx={idx} />
        ))}
      </div>
    </>
  );
};

export default Question;
