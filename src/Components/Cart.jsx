// import React from "react";
// import useCartStore from "../Components/cartStore";

// const Cart = () => {
//   const { cart, removeFromCart, clearCart, updateCartItem } = useCartStore();

//   console.log("Current cart state:", cart); // Debugging line

//   // Calculate total price for all items in the cart
//   const getTotalPrice = () => {
//     return cart.reduce((total, item) => total + item.price * item.qty, 0);
//   };

//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
//       {cart.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <div>
//           {cart.map((item) => (
//             <div key={item.id} className="flex justify-between items-center p-2 border-b">
//               <div>
//                 <span className="font-semibold">{item.name}</span> - ${item.price} x {item.qty}
//               </div>
//               <div className="flex items-center gap-2">
//                 <button
//                   onClick={() => updateCartItem(item.id, item.qty - 1)}
//                   disabled={item.qty <= 1}
//                   className="px-2 py-1 bg-gray-200 rounded-md"
//                 >
//                   -
//                 </button>
//                 <span>{item.qty}</span>
//                 <button
//                   onClick={() => updateCartItem(item.id, item.qty + 1)}
//                   className="px-2 py-1 bg-gray-200 rounded-md"
//                 >
//                   +
//                 </button>
//                 <button
//                   onClick={() => removeFromCart(item.id)}
//                   className="text-red-500 ml-4"
//                 >
//                   Remove
//                 </button>
//               </div>
//             </div>
//           ))}
//           <div className="mt-4">
//             <h3 className="font-bold text-lg">Total: ${getTotalPrice().toFixed(2)}</h3>
//             <button
//               onClick={clearCart}
//               className="mt-2 px-4 py-2 bg-red-500 text-white rounded-lg"
//             >
//               Clear Cart
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;





import React from "react";
import useCartStore from "../Components/cartStore";

const Cart = () => {
  const { cart, removeFromCart, clearCart, updateCartItem } = useCartStore();

  console.log("Current cart state:", cart); // Debugging line

  // Calculate total price for all items in the cart
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.qty, 0);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center p-2 border-b">
              <div className="flex items-center">
                <img src={`http://localhost:5000${item.image}`} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
                <span className="font-semibold ml-4">{item.name}</span> - ₹{(Number(item.price) || 0).toFixed(2)} x {item.qty}
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateCartItem(item.id, item.qty - 1)}
                  disabled={item.qty <= 1}
                  className="px-2 py-1 bg-gray-200 rounded-md"
                >
                  -
                </button>
                <span>{item.qty}</span>
                <button
                  onClick={() => updateCartItem(item.id, item.qty + 1)}
                  className="px-2 py-1 bg-gray-200 rounded-md"
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 ml-4"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="mt-4">
            <h3 className="font-bold text-lg">Total: ₹{(getTotalPrice() || 0).toFixed(2)}</h3>
            <button
              onClick={clearCart}
              className="mt-2 px-4 py-2 bg-red-500 text-white rounded-lg"
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
