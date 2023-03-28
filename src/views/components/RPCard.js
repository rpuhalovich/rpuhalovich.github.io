import React from "react";

import "./RPCard.css";

function RPCard(props) {
  const { imgSrc, imgAlt, imgWidth, imgHeight, header, description, tech, children, className, ...rest } = props;
  return (
    <>
      <div className={`RPCard Monospace ${className}`} {...rest}>
        <div className="cardContentContainer">
          <img className="cardImage" src={imgSrc} alt={imgAlt} width={imgWidth} height={imgHeight} />
          <div>
            <h3>{header}</h3>
            <p>{description}</p>
            <p className="Monospace">{tech}</p>
          </div>
        </div>
        {children}
      </div>
    </>
  );
}

export default RPCard;
