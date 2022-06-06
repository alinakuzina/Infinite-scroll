import React from "react";
import classes from "./Navigation.module.css";
import SideBar from "./SidebarNav";

const Navigation = (props) => {
  return (
    <React.Fragment>
      <SideBar />
      <div className={classes.container}>
        <div className={classes.header}>
          <h1>Infinite scroll</h1>
          <h5>Unsplash API</h5>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navigation;
