import React from "react";

export const ImagesContext = React.createContext({
  count: 10,
  apiKey: "",
});

const ImageContextProvider = (props) => {
  return (
    <ImagesContext.Provider
      value={{
        count: 10,
        apiKey: "wXL2snX8Ch-nVL-89gJ67ojlW-yJm0XyEo0kfjpK1LY",
      }}
    >
      {props.children}
    </ImagesContext.Provider>
  );
};

export default ImageContextProvider;
