import React from "react";
import styles from "./spinner.module.scss";

const Spinner = () => {
  return (
    <div className={styles.spinner}>
      <div className={styles.spinner_loading} data-testid={"spinner"}></div>
    </div>
  );
};

export default Spinner;
