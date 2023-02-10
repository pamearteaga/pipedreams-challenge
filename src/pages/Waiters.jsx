import React from "react";
import { useSelector } from "react-redux";
import Spinner from "../components/Spinner/Spinner";
import StaffList from "../components/StaffList/StaffList";

const Waiters = ({day}) => {
  const waitersList = useSelector(store => store.staff.waitersList)

  return (
    <div>
      {waitersList.monday === undefined ? <Spinner /> : <StaffList list={waitersList[day]} role={"Waiter"} />}
    </div>
  );
};

export default Waiters;
