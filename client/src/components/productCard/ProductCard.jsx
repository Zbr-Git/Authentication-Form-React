
const ProductCard = ({ title, price, image }) => {
  return (
    <div className="flex flex-col items-center bg-white border rounded-lg shadow-md p-4 m-4 w-full md:w-1/4">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="flex flex-col items-start justify-between w-full mt-4">
        <div> 
          <h4 className="text-lg font-semibold mb-1">{title}</h4>
          <h4 className="text-xl font-bold text-gray-800">${price}</h4>
        </div>
        <button className="mt-2 text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:ring-opacity-50 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add to Cart</button>
        
      </div>
    </div>
  );
};

export default ProductCard;
