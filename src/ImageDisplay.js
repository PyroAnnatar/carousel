import React from "react";

const ImageDisplay = ({ src, index, translate }) => {
  return (
    <>
      <img
        className={`doge ${translate}`}
        src={src}
        alt={index}
        style={{ height: "300px" }}
      />
    </>
  );
};

export default ImageDisplay;
