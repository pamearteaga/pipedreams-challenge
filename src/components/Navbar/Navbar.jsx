import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import styles from "./navbar.module.scss";

const Navbar = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState("Waiters");

  return (
    <div className={styles.navbar}>
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
