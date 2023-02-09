import React from "react";
import { useSelector } from "react-redux";
import StaffList from "../components/StaffList/StaffList";

const Cooks = ({day}) => {
  const cooksList = useSelector(store => store.staff.cooksList)

  return (
    <div>
      {cooksList.monday === undefined ? <p>wait</p> : <StaffList list={cooksList[day]} role={"Cook"}/>}
    </div>
  );
};

export default Cooks;
