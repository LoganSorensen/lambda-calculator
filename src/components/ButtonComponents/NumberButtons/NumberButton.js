import React from "react";

const NumberButton = props => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */
      // <div>
        <button class="numberBtn">{props.button}</button>
      // </div>
      }
    </>
  );
};

export default NumberButton;