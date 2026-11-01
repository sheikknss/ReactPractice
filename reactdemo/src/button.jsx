import React from "react";

const button = (props) => {
  return (
    <div>
      <button onClick={() => props.OnClick(props.message)}>
        {props.children}
      </button>
    </div>
  );
};

export default button;
