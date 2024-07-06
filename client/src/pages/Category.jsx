import { useEffect, useState } from "react";
import ApiRequest from "../Utils/axios.js";
import CategoryCard from "../components/CategoryCard.jsx";

const Category = () => {
  const [category, setCategory] = useState([]);

  const getCategory = async () => {
    try {
      const response = await ApiRequest.get("/products/categories");
      console.log(response.data);
      setCategory(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-6 text-3xl font-bold">Categories</h1>

      <div className="-mx-4 flex flex-wrap">
        {category.length > 0 ? (
          category.map((category, index) => (
            <CategoryCard key={index} categoryName={category} />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default Category;
