import React, { useContext } from "react";
import LoadImages from "../LoadImages/LoadImages";
import { ImagesContext } from "../context/img-context";

const FoodPage = (props) => {
  const imgContext = useContext(ImagesContext);
  const count = imgContext.count;
  const apiKey = imgContext.apiKey;

  return (
    <div>
      <h1>Food</h1>
      <LoadImages
        url={`https://api.unsplash.com/photos/random/?query=food&client_id=${apiKey}&count=${count}`}
      />
    </div>
  );
};
export default FoodPage;
