import React, { useContext } from "react";
import LoadImages from "../LoadImages/LoadImages";
import { ImagesContext } from "../context/img-context";

const MainPage = (props) => {
  const imgContext = useContext(ImagesContext);
  const count = imgContext.count;
  const apiKey = imgContext.apiKey;

  return (
    <div>
      <LoadImages
        url={`https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`}
      />
    </div>
  );
};
export default MainPage;
