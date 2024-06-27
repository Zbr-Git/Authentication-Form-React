import React from "react";

const ProductCard = ({ title, price, image }) => {
  return (
    <div className="flex flex-col items-center bg-white border rounded-lg shadow-md p-4 m-4 w-full md:w-1/4">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
      <div className="flex flex-col items-start w-full mt-4">
        <h4 className="text-lg font-semibold mb-2">{title}</h4>
        <h4 className="text-xl font-bold text-gray-800">${price}</h4>
      </div>
    </div>
  );
};

export default ProductCard;
