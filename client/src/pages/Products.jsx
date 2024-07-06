import { useEffect, useState } from "react";
import ApiRequest from "../Utils/axios.js";
import ProductCard from "../components/productCard/ProductCard.jsx";
import { useParams } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { categoryName } = useParams(); 

  const getProducts = async () => {
    try {
      const response = categoryName
        ? await ApiRequest.get(`/products/category/${categoryName}`)
        : await ApiRequest.get("/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getProducts();
    console.log(categoryName)
  }, [categoryName]);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-6 text-3xl font-bold underline">Products</h1>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-6 w-full rounded border p-2"
      />

      <div className="flex flex-wrap -mx-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              className="w-full rounded shadow-md overflow-hidden mb-6"
            />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default Products;
