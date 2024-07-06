
import ApiRequest from "../Utils/axios";
import { useNavigate } from "react-router-dom";

const CategoryCard = ({ categoryName }) => {
  
  const navigate = useNavigate();

  const getSelectedCatProducts = async () => {
    await ApiRequest.get(`/products/category/${categoryName}`);
    navigate(`/products/category/${categoryName}`);
  };

  return (
    <div
      onClick={getSelectedCatProducts}
      className="m-4 flex w-full flex-col items-center rounded-lg border bg-white p-4 shadow-md md:w-1/4 cursor-pointer"
    >
      <h4 className="mb-2 text-lg font-semibold">{categoryName}</h4>
    </div>
  );
};

export default CategoryCard;
