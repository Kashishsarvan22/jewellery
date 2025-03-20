import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useCartStore from '../cartStore';
import Navbar from '../Navbar';
import { toast } from 'react-toastify';

const AntiTarnishNecklaces = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCartStore();

  useEffect(() => {
    const fetchAntiTarnishNecklaces = async () => {
      try {
        setLoading(true);
        console.log('Fetching Sets of Earrings products from: http://localhost:5000/api/products/type/anti-tarnish necklaces');
        // Fetch only Set of Earrings products
        const response = await axios.get('http://localhost:5000/api/products/type/anti-tarnish necklaces');
        console.log('Anti Tarnish Earrings products received:', response.data);
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching Sets of Earrings products:', err);
        setError('Failed to load Anti Tarnish Earrings products. Please try again later.');
        setLoading(false);
      }
    };

    fetchAntiTarnishNecklaces();
  }, []);

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

  // Helper function to format price safely
  const formatPrice = (price) => {
    const numPrice = typeof price === 'string' ? parseFloat(price) : price;
    
    if (isNaN(numPrice)) {
      return price;
    }
    
    return numPrice.toFixed(2);
  };

  // Helper function to construct proper image URL
  const getImageUrl = (imagePath) => {
    console.log('Original image path:', imagePath);
    
    if (!imagePath) {
      return 'https://via.placeholder.com/300x300?text=No+Image';
    }
    
    if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
      return imagePath;
    }
    
    if (imagePath.startsWith('/')) {
      return `http://localhost:5000${imagePath}`;
    } else {
      return `http://localhost:5000${imagePath}`;
    }
  };

  if (loading) return <div className="container mx-auto mt-32 text-center">Loading Anti Tarnish Necklaces products...</div>;
  if (error) return <div className="container mx-auto mt-32 text-center text-red-500">{error}</div>;
  if (products.length === 0) return <div className="container mx-auto mt-32 text-center">No Anti Tarnish Nacklaces products found.</div>;

  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <Navbar />

     
        <div className="container mx-auto px-4 mt-10">
          <h1 className="text-3xl font-bold mb-8 text-center mt-30">Anti Tarnish Necklaces Collection</h1>
          
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

export default AntiTarnishNecklaces;