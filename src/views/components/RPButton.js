import React from "react";

import "./RPButton.css";

function RPButton(props) {
  const { children, ...rest } = props;
  return (
    <>
      <button className="RPButton Monospace" {...rest}>
        {children}
      </button>
    </>
  );
}

export default RPButton;
