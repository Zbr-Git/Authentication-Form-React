import { useState } from "react";
import ApiRequest from "../axios/axios.js";
import ProductCard from "../components/productCard/ProductCard.jsx";
import { useQuery } from "@tanstack/react-query";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const { isLoading, error, data: products } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await ApiRequest.get("/products");
      return response.data;
    },
  });

  if (isLoading) return 'Loading...';
  if (error) {
    return <p>Error fetching products: {error.message}</p>;
  }

  const filteredProducts = products ? products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  ) : [];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold underline mb-6">Products</h1>
      <input 
        type="text" 
        placeholder="Search"  
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
        className="w-full p-2 border rounded mb-6"
      />
      
      <div className="flex flex-wrap -mx-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
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
