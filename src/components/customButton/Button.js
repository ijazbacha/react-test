import React from "react";
import './Button.css'

function Button({ children, onClick, type, buttonStyle, buttonSize }) {
  const STYLE = [
    "btn--primary--solid",
    "btn--warning--solid",
    "btn--danger--solid",
    "btn--success--solid",
    "btn--primary--outline",
    "btn--warning--outline",
    "btn--danger--outline",
    "btn--success--outline",
  ];

  const SIZE = ["btn--medium", "btn--large"];

  const setBtnStyle = STYLE.includes(buttonStyle) ? buttonStyle : STYLE[0];

  const setBtnSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0];

  return (
    <button className={`btn ${setBtnStyle} ${setBtnSize}`} onClick={onClick} type={type}>
      {children}
    </button>
  );
}

export default Button;
