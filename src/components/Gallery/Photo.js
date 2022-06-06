import React from "react";
import classes from "./Photo.module.css";

let Photo = (props) => {
  return (
    <a href={props.href} target="_blank">
      <img
        src={props.src}
        alt={props.alt}
        title={props.title}
        className={classes.photo}
      />
    </a>
  );
};

export default Photo;
