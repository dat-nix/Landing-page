import React from 'react';
import './Button.css';

const Button = ({ type, children }) => {
  const buttonClass = type === 'secondary' ? 'btn secondary' : 'btn primary';

  return (
    <div className="button-language">
      <button className={buttonClass}>{children}</button>
    </div>
  );
};

export default Button;