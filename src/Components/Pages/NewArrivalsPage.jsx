import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Navbar';

const NewArrivalsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        
        // Get today's date and the date 30 days ago
        const today = new Date();
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(today.getDate() - 30); // Set to 30 days before today
        
        // Fetch all products
        const response = await axios.get('http://localhost:5000/api/products/all');
        
        // Filter products by date
        const filteredProducts = response.data.filter(product => {
          const productDate = new Date(product.date);
          return productDate >= thirtyDaysAgo && productDate <= today;
        });
        
        setProducts(filteredProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError('Failed to load products. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
  
    fetchProducts();
  }, []);
  
  if (loading) return <div className="text-center text-xl font-bold">Loading products...</div>;
  if (error) return <div className="text-red-500 text-center">{error}</div>;
  if (products.length === 0) return <div className="text-gray-500 text-center">No current products available.</div>;

  return (
    <main className="pt-0 mx-5">
      <div className="flex flex-col h-screen">
      {/* Navbar */}
      <Navbar />
    <div className="flex-1">
      <div className="flex justify-between items-center mt-10 px-5 md:px-20">
      

        <h1 className="text-3xl font-bold mb-8 text-center mt-30 mx-120">
          New Launch
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.length === 0 ? (
          <div className="col-span-full text-center py-10">
            <p className="text-xl text-gray-500">No products match your filters</p>
          </div>
        ) : (
          products.map((item) => ( // Removed unnecessary extra `{}` wrapping
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

export default NewArrivalsPage;
