import React from "react";
import { useSelector } from "react-redux";
import StaffList from "../components/StaffList/StaffList";

const Waiters = ({day}) => {
  const waitersList = useSelector(store => store.staff.waitersList)

  return (
    <div>
      {waitersList.monday === undefined ? <p>wait</p> : <StaffList list={waitersList[day]} role={"Waiter"} />}
    </div>
  );
};

export default Waiters;
