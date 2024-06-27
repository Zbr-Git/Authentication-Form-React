import { useEffect, useState } from "react";
import ApiRequest from "../axios/axios.js";
import ProductCard from "../components/productCard/ProductCard.jsx";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getProducts = async () => {
    const response = await ApiRequest.get("/products");
    setProducts(response.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
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

      <div className="-mx-4 flex flex-wrap">
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
