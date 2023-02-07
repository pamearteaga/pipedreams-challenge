import React from "react";
import PropTypes from 'prop-types';
import StaffList from "../components/StaffList/StaffList";
import {waiters} from "../mocks/data"

const Waiters = ({day}) => {
  return (
    <div>
      <StaffList list={waiters[day]} role={"Waiter"} />
    </div>
  );
};

export default Waiters;
