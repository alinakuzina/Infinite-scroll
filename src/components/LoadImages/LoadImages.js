import React, { useContext, useState, useEffect } from "react";
import { ImagesContext } from "../context/img-context";
import Gallery from "../Gallery/Gallery";

import classes from "./Loadimages.module.css";

let prevUrl;

let LoadImages = (props) => {
  const [imgloaded, setImgloaded] = useState([]);
  const [loading, setLoading] = useState(false);
  let [startFatching, setStartFatching] = useState(false);

  let photosArray = [];
  let photosReady = [];
  let timer;

  if (props.url !== prevUrl) {
    photosArray = [];
    photosReady = [];
    setImgloaded([]);
    prevUrl = props.url;
  }

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const scrollHandler = (e) => {
    if (timer) clearTimeout(timer);
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
        50 &&
      loading === false
    ) {
      timer = setTimeout(() => setStartFatching((prev) => !prev), 100);
    }
  };

  useEffect(() => {
    if (loading === false) {
      getPhotos();

      console.log("timer");
    }
  }, [startFatching]);

  //   Unsplash API

  const displayPhotos = function () {
    console.log("display");
    for (let i = 0; i < photosArray.length; i++) {
      photosReady.push({
        id: photosArray[i].id,
        src: photosArray[i].urls.regular,
        alt: photosArray[i].alt_description,
        title: photosArray[i].alt_description,
        href: photosArray[i].links.html,
      });
    }

    setImgloaded([...imgloaded, ...photosReady]);
    setLoading(false);
  };

  //Get photos grom API
  const getPhotos = async function () {
    if (loading === false) {
      setLoading(true);

      try {
        const response = await fetch(props.url);
        photosArray = await response.json();
        displayPhotos();
      } catch (err) {
        alert("Please try tomorrow. It is too much request for today =(");
        setLoading(false);
      }
    }
  };

  return (
    <React.Fragment>
      <Gallery arr={imgloaded} />
    </React.Fragment>
  );
};

export default LoadImages;
