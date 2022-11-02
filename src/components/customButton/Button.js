import React from "react";

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

  return (
    <button onClick={onClick} type={type}>
      {children}
    </button>
  );
}

export default Button;
