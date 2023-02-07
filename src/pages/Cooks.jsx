import React from "react";
import PropTypes from 'prop-types';
import StaffList from "../components/StaffList/StaffList";
import {cooks} from "../mocks/data"

const Cooks = ({day}) => {
  return (
    <div>
      <StaffList list={cooks[day]} role={"Cook"}/>
    </div>
  );
};

export default Cooks;
