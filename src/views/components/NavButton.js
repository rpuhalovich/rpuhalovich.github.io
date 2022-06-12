import React from "react";

import "./NavButton.css";

function NavButton(props) {
  const { onClick } = props;
  return <div className="button" onClick={onClick} />;
}

export default NavButton;
