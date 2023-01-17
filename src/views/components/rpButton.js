import React from "react";

function RPButton(props) {
  const { children, ...rest } = props;
  return (
    <>
      <button className="rpButton" {...rest}>
        {children}
      </button>
    </>
  );
}

export default RPButton;
