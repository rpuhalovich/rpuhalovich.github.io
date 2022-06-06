import "./NavButton.css";

import React from "react";

function NavButton(props) {
  const { onClick } = props;
  return <div className="button" onClick={onClick} />;
}

export default NavButton;
