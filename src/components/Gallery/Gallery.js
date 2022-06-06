import React, { useCallback, useRef, useContext, createContext } from "react";
import classes from "./Gallery.module.css";
import Photo from "./Photo";

const Gallery = (props) => {
  return (
    <div className={classes.container}>
      {props.arr.map((el, index) => {
        return (
          <Photo
            key={el.id + Math.random()}
            src={el.src}
            alt={el.alt}
            title={el.title}
            href={el.href}
          />
        );
      })}
    </div>
  );
};
export default Gallery;
