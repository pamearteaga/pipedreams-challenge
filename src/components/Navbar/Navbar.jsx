import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import styles from "./navbar.module.scss";

const Navbar = ({role}) => {
  const navigate = useNavigate();
  const [active, setActive] = useState(role);
  
  useEffect(() => {
    navigate("/");
  }, [role])
  
  return (
    <div className={styles.navbar} data-testid={"navbar"}>
      <div className={styles.navbar_container}>
        <Button
          type={"link"}
          text={"Waiters"}
          buttonAction={() => {
            navigate("/waiters");
            setActive("Waiters");
          }}
          active={active === "Waiters" ? true : false}
        />
        <Button
          type={"link"}
          text={"Cooks"}
          buttonAction={() => {
            navigate("/cooks");
            setActive("Cooks");
          }}
          active={active === "Cooks" ? true : false}
        />
      </div>
    </div>
  );
};

export default Navbar;
