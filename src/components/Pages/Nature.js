import React, { useContext } from "react";
import LoadImages from "../LoadImages/LoadImages";
import { ImagesContext } from "../context/img-context";

const NaturePage = (props) => {
  const imgContext = useContext(ImagesContext);
  const count = imgContext.count;
  const apiKey = imgContext.apiKey;

  return (
    <div>
      <h1>Nature</h1>
      <LoadImages
        url={`https://api.unsplash.com/photos/random/?query=nature&client_id=${apiKey}&count=${count}`}
      />
    </div>
  );
};
export default NaturePage;
