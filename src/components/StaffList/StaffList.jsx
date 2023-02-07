import React from "react";
import PropTypes from "prop-types";
import Staff from "../Staff/Staff";
import styles from "./stafflist.module.scss";

const StaffList = ({ list, role }) => {
  return (
    <div className={styles.staffList}>
      {list.map((name, i) => {
        return <Staff key={i} name={name} role={role} />;
      })}
    </div>
  );
};

StaffList.propTypes = {
  list: PropTypes.array, 
  role: PropTypes.string
};
StaffList.defaultProps = {
  list: "Name", 
  role: "Role"
};

export default StaffList;
