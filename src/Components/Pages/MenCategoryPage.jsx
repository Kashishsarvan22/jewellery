import React, { useEffect, useState, useContext } from "react";
import { FilterContext } from "./FilterContext";
import Loader from "../common/Loader";
import useCartStore from "../cartStore";
import Navbar from "../Navbar";

const MenCategoryPage = () => {
  const { filters } = useContext(FilterContext);
  const { addToCart } = useCartStore();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const queryParams = new URLSearchParams();

        if (filters.categories.length > 0) {
          queryParams.append("category", filters.categories[0]);
        }

        const response = await fetch(`http://localhost:5000/api/products/all?${queryParams.toString()}`);
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [filters]);

  const handleAddToCart = (product) => {
    addToCart({
      id: product._id,
      name: product.name,
      price: product.price,
      image: product.image,
      qty: 1,
    });
    toast.success(`${product.name} added to cart!`);
  };

  if (loading) return <Loader />;
  if (error) return <div>Error: {error}</div>;

  return (
    <main className="pt-0 mx-5">
      <div className="flex flex-col h-screen">
      {/* Navbar */}
      <Navbar />

      
      <div className="flex-1">
        <div className="flex justify-between items-center my-10 px-5 md:px-20">
          <h1 className="text-3xl font-serif font-semibold text-center mx-120 mt-50">Men's Collection</h1>
        
        </div>

        <div className="container p-5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.length === 0 ? (
            <div className="col-span-full text-center py-10">
              <p className="text-xl text-gray-500">No products match your filters</p>
            </div>
          ) : (
            products.filter((data) => data.category === "men").map((item) => (
              <div key={item._id} className="border rounded-lg overflow-hidden shadow-lg bg-white flex flex-col items-center">
                <img src={`http://localhost:5000${item.image}`} alt={item.name} className="w-full h-80 object-cover" />
                <div className="p-4 text-left">
                  <h2 className="text-2xl font-bold">{item.name}</h2>
                  <p className="text-gray-700">{item.description}</p>
                  <div className="flex gap-5">
                    <p className="text-gray-700 italic font-semibold">
                      <del>₹{item.price}</del>
                    </p>
                    <p className="text-gray-700">₹{item.discount_price}</p>
                  </div>
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="mt-4 px-8 py-2 bg-[#8B5A2B] text-white rounded-lg hover:bg-[#8B5A2B] transition"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
     </div>
    </main>
  );
};

export default MenCategoryPage;
