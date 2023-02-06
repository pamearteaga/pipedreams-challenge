import React from "react";
import styles from "./button.module.scss";
import PropTypes from 'prop-types';

const Button = ({text, type, active, buttonAction, disabled}) => {

  return (
    <>
      <button
        className={
          type === "link" ? styles.button_link :
          type === "button" ? styles.button_secondary : 
          disabled ? styles.button_disabled :
          styles.button_primary
        }
        onClick={() => buttonAction()}
        disabled={disabled}
      >
        {text}
      </button>
    </>
  );
};

Button.propTypes = {
  text: PropTypes.string, 
  type: PropTypes.string, 
  buttonAction: PropTypes.func, 
  active: PropTypes.bool,
  disabled: PropTypes.bool
};
Button.defaultProps = {
  text: "Text", 
  type: "button", 
  buttonAction: () => null, 
  active: false,
  disabled: false,
};

export default Button;
