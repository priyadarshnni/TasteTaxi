import React from 'react';

const ImageComponent = ({ image }) => {
  const url = "http://localhost:5000"; // Replace with your actual base URL
  const imageUrl = `${url}/uploads/${image}`;

  return (
    <div>
      <img src={imageUrl} alt="example" />
    </div>
  );
};

export default ImageComponent;