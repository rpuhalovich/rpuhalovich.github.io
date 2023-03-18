import React from "react";

import "./RPButton.css";

function RPButton(props) {
  const { children, className, ...rest } = props;
  return (
    <>
      <button className={`RPButton Monospace ${className}`} {...rest}>
        {children}
      </button>
    </>
  );
}

export default RPButton;
