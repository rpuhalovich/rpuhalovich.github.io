import React from "react";

import "./RPCard.css";

function RPCard(props) {
  const { children, ...rest } = props;
  return (
    <>
      <div className="RPCard Monospace" {...rest}>
        {children}
      </div>
    </>
  );
}

export default RPCard;
