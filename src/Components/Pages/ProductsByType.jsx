import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import useCartStore from '../cartStore';
import Navbar from '../Navbar';
import { toast } from 'react-toastify';

const ProductsByType = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { type } = useParams(); // Extract the type parameter from the URL
  const { addToCart } = useCartStore();

  // Convert type parameter to match API format (e.g., "rings" to "Rings")
  const formattedProductType = type ? type.charAt(0).toUpperCase() + type.slice(1).toLowerCase() : '';

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(`http://localhost:5000/api/products/type/${type}`);
        setProducts(response.data);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Failed to load products. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [type]); // Re-fetch when the type parameter changes

  const handleAddToCart = (product) => {
    addToCart({
      id: product._id,
      name: product.name,
      price: product.price,
      image: product.image,
      qty: 1
    });
    toast.success(`${product.name} added to cart!`);
  };

  const formatPrice = (price) => {
    const numPrice = typeof price === 'string' ? parseFloat(price) : price;
    return isNaN(numPrice) ? price : numPrice.toFixed(2);
  };

  const getImageUrl = (imagePath) => {
    if (!imagePath) {
      return 'https://via.placeholder.com/300x300?text=No+Image';
    }

    if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
      return imagePath;
    }

    return imagePath.startsWith('/')
      ? `http://localhost:5000${imagePath}`
      : `http://localhost:5000${imagePath}`;
  };

  if (loading) return <div className="container mx-auto mt-32 text-center">Loading products...</div>;
  if (error) return <div className="container mx-auto mt-32 text-center text-red-500">{error}</div>;
  if (products.length === 0) return <div className="container mx-auto mt-32 text-center">No products found in this category.</div>;

  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <Navbar />

     
        <div className="container mx-auto px-4 mt-10">
          <h1 className="text-3xl font-bold mb-8 text-center capitalize mt-30">{formattedProductType} Collection</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product._id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative w-full h-80">
                  <img
                    src={getImageUrl(product.image)}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      console.log('Image load error for:', product.name);
                      e.target.onerror = null;
                      e.target.src = 'https://via.placeholder.com/300x300?text=Image+Not+Available';
                    }}
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                  <p className="text-gray-700 mb-2">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold">₹{formatPrice(product.price)}</span>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="bg-gradient-to-r from-[#7B3F00] to-[#C19A6B] text-white px-4 py-2 rounded hover:opacity-90 transition"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

  );
};

export default ProductsByType;
