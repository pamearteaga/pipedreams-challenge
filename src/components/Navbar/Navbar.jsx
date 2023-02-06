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
          buttonAction={(e) => {
            navigate("/waiters");
            setActive(e.target.value);
          }}
          active={false}
          disabled={false}
        />
        <Button
          type={"link"}
          text={"Cooks"}
          buttonAction={(e) => {
            navigate("/cooks");
            setActive(e.target.value);
          }}
          active={false}
          disabled={false}
        />
      </div>
    </div>
  );
};

export default Navbar;
