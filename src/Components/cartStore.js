// import { create } from "zustand";

// // Function to get stored cart data with expiration check
// const getStoredCart = () => {
//   const data = JSON.parse(localStorage.getItem("cartData"));
//   if (!data) return [];

//   const now = new Date().getTime();
//   if (now > data.expiration) {
//     localStorage.removeItem("cartData"); // Clear expired cart
//     return [];
//   }
//   return data.cart;
// };

// // Function to save cart with expiration (2 days)
// const saveCartToStorage = (cart) => {
//   const expiration = new Date().getTime() + 2 * 24 * 60 * 60 * 1000; // 2 days
//   localStorage.setItem("cartData", JSON.stringify({ cart, expiration }));
// };

// const useCartStore = create((set) => ({
//   cart: getStoredCart(), // Load cart from storage

//   addToCart: (product) =>
//     set((state) => {

//       const existingItem = state.cart.find((item) => item.id === product.id);
//       let updatedCart;

//       if (existingItem) {
//         updatedCart = state.cart.map((item) =>
//           item.id === product.id ? { ...item, qty: item.qty + 1 } : item
//         );
//       } else {
//         updatedCart = [...state.cart, { ...product, qty: 1 }];
//       }

//       saveCartToStorage(updatedCart);
//       return { cart: updatedCart };
//     }),

//   removeFromCart: (id) =>
//     set((state) => {
//       const updatedCart = state.cart.filter((item) => item.id !== id);
//       saveCartToStorage(updatedCart);
//       return { cart: updatedCart };
//     }),

//   clearCart: () => {
//     localStorage.removeItem("cartData"); // Remove from storage
//     set({ cart: [] });
//   },
// }));

// export default useCartStore;

import { create } from "zustand";

// Function to get stored cart data with expiration check
const getStoredCart = () => {
  const data = JSON.parse(localStorage.getItem("cartData"));
  if (!data) return [];

  const now = new Date().getTime();
  if (now > data.expiration) {
    localStorage.removeItem("cartData"); // Clear expired cart
    return [];
  }
  return data.cart;
};

// Function to save cart with expiration (2 days)
const saveCartToStorage = (cart) => {
  const expiration = new Date().getTime() + 2 * 24 * 60 * 60 * 1000; // 2 days
  localStorage.setItem("cartData", JSON.stringify({ cart, expiration }));
};

const useCartStore = create((set) => ({
  cart: getStoredCart(), // Load cart from storage

  addToCart: (product) =>
    set((state) => {
      const existingItem = state.cart.find((item) => item.id === product.id);
      let updatedCart;

      if (existingItem) {
        updatedCart = state.cart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        updatedCart = [
          ...state.cart,
          { 
            ...product, 
            qty: 1, 
            price: Number(product.price) || 0,  // Ensure price is a number
            image: product.image // Store product image
          }
        ];
      }

      saveCartToStorage(updatedCart);
      return { cart: updatedCart };
    }),

  // Update item quantity
  updateCartItem: (id, qty) =>
    set((state) => {
      const updatedCart = state.cart.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, qty) } : item
      );
      saveCartToStorage(updatedCart);
      return { cart: updatedCart };
    }),

  removeFromCart: (id) =>
    set((state) => {
      const updatedCart = state.cart.filter((item) => item.id !== id);
      saveCartToStorage(updatedCart);
      return { cart: updatedCart };
    }),

  clearCart: () => {
    localStorage.removeItem("cartData"); // Remove from storage
    set({ cart: [] });
  },
}));

export default useCartStore;
