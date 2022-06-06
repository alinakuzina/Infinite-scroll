import React, { useContext } from "react";
import LoadImages from "../LoadImages/LoadImages";
import { ImagesContext } from "../context/img-context";

const FasionPage = (props) => {
  const imgContext = useContext(ImagesContext);
  const count = imgContext.count;
  const apiKey = imgContext.apiKey;

  return (
    <div>
      <h1>Fasion</h1>
      <LoadImages
        url={`https://api.unsplash.com/photos/random/?query=fstyle-fashion&client_id=${apiKey}&count=${count}`}
      />
    </div>
  );
};
export default FasionPage;
