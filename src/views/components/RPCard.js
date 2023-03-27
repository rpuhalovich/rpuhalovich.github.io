import React from "react";

import "./RPCard.css";

function RPCard(props) {
  const { children, className, ...rest } = props;
  return (
    <>
      <div className={`RPCard Monospace cardHeight ${className}`} {...rest}>
        {children}
      </div>
    </>
  );
}

export default RPCard;
