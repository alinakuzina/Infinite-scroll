import React from "react";
import classes from "./SideBar.module.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const SideBar = (props) => {
  const [ifChecked, setCheckbox] = useState(false);

  let checkboxChange = () => {
    setCheckbox(!ifChecked);
  };

  return (
    <div className={classes.navigation}>
      <input
        type="checkbox"
        className={classes.checkbox}
        checked={ifChecked}
        id="navi-toggle"
        onChange={checkboxChange}
      />
      <button
        htmlFor="navi-toggle"
        className={classes.button}
        onClick={checkboxChange}
      >
        <span className={classes.icon}>&nbsp;</span>
      </button>
      <div className={classes.background}>&nbsp;</div>

      <nav className={classes.nav}>
        <ul className={classes.list}>
          <li className={classes.item} onClick={checkboxChange}>
            <NavLink to="/animals" className={classes.link}>
              Animals
            </NavLink>
          </li>
          <li className={classes.item} onClick={checkboxChange}>
            <NavLink to="/people" className={classes.link}>
              People
            </NavLink>
          </li>
          <li className={classes.item} onClick={checkboxChange}>
            <NavLink to="/nature" className={classes.link}>
              Nature
            </NavLink>
          </li>
          <li className={classes.item} onClick={checkboxChange}>
            <NavLink to="/fashion" className={classes.link}>
              Fashion
            </NavLink>
          </li>
          <li className={classes.item} onClick={checkboxChange}>
            <NavLink to="/food" className={classes.link}>
              Food
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
