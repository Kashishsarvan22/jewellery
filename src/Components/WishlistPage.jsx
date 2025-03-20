import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const WishlistPage = () => {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchWishlist();
  }, []);

  const fetchWishlist = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:5000/api/wishlist");
      setWishlist(response.data);
    } catch (error) {
      console.error("Error fetching wishlist", error);
      toast.error("Failed to load wishlist items");
    } finally {
      setLoading(false);
    }
  };

  const removeFromWishlist = async (itemId) => {
    try {
      await axios.delete(`http://localhost:5000/api/wishlist/${itemId}`);
      setWishlist(wishlist.filter((item) => item.id !== itemId));
      toast.success("Item removed from wishlist");
    } catch (error) {
      console.error("Error removing item", error);
      toast.error("Failed to remove item from wishlist");
    }
  };

  return (
    <div className="p-6 mt-20">
      <h2 className="text-2xl font-bold mb-4 text-center">My Wishlist</h2>
      {loading ? (
        <div className="text-center py-10">Loading wishlist items...</div>
      ) : wishlist.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-xl text-gray-500">Your wishlist is empty</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {wishlist.map((item) => (
            <div key={item.id} className="border p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <img src={item.image} alt={item.name} className="w-full h-70 object-cover rounded-md" />
              <h3 className="text-lg font-bold mt-3">{item.name}</h3>
              <p className="text-gray-600 font-semibold my-2">₹{item.price}</p>
              <button
                onClick={() => removeFromWishlist(item.id)}
                className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 w-full transition-colors"
              >
                Remove from Wishlist
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;


