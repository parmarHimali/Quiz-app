import React from "react";

const MessageBox = ({ total, len }) => {
  return (
    <>
      <h1 className="alert alert-warning que text-center">
        <span style={{ color: `${total < 8 ? "red" : "green"}` }}>{total}</span>{" "}
        / <span> {len}</span>
      </h1>
      <h4 className="score">
        You got {total} out of {len} questions correct. <br />
      </h4>
    </>
  );
};

export default MessageBox;
