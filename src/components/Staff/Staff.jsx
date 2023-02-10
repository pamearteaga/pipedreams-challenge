import React from "react";
import PropTypes from "prop-types";
import styles from "./staff.module.scss";

const Staff = ({ name, role }) => {
  return (
    <div className={styles.staff} data-testid={"staff"}>
      <h3 className={styles.staff_name}>{name}</h3>
      <h4 className={styles.staff_role}>{role}</h4>
      <p className={styles.staff_info}><strong>phone:</strong> +56 9 1111 0000</p>
      <p className={styles.staff_info}> <strong>mail:</strong> {name}@pipedreams.com</p>
    </div>
  );
};

Staff.propTypes = {
  name: PropTypes.string, 
  role: PropTypes.string
};
Staff.defaultProps = {
  name: "Name", 
  role: "Role"
};

export default Staff;
