import React from "react";
import styles from "./button.module.scss";
import PropTypes from 'prop-types';

const Button = ({text, type, active, buttonAction, disabled}) => {
  return (
    <>
      <button
        data-testid={"button"}
        className={
          type === "link" && !active ? styles.button_link :
          type === "link" && active ? styles.button_link_active :
          type === "button" && !disabled ? styles.button_primary : 
          type === "button" && disabled ? styles.button_primary_disabled :
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
