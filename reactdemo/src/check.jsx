import React from "react";
import { useState } from "react";

const check = (props) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (props) => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        {props.name}
      </label>
    </div>
  );
};

export default check;
