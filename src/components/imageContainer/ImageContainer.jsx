import React from "react";
import Image from "react-bootstrap/Image";

const ImageContainer = ({ topText, bottomText, imageUrl }) => {
    
  return <Image src={imageUrl} alt="image" fluid={true} rounded={true} />;
};

export default ImageContainer;
