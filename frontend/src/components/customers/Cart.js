import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getToken, setAuthHeader } from "../../utils/auth";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Fetch cart items
  const fetchCart = async () => {
    if (!getToken()) {
      navigate("/login");
      return;
    }

    try {
      const userEmail = sessionStorage.getItem('userEmail');
      const response = await axios.get(`http://localhost:5432/api/customer/cart?userEmail=${userEmail}`);
      
      if (response.data.success) {
        setCartItems(response.data.cart.products || []);
      } else {
        setError("Failed to fetch cart items");
      }
    } catch (err) {
      console.error("Error fetching cart:", err);
      setError("Failed to load cart items. Please try again.");
      
      if (err.response?.status === 401) {
        navigate("/login");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setAuthHeader(axios);
    fetchCart();
  }, [navigate]);

  // Function to handle quantity change
  const handleQuantityChange = (productId, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.productId === productId ? { ...item, quantity: Math.max(1, newQuantity) } : item
      )
    );
    // TODO: Update quantity in backend
  };

  // Function to remove item from cart
  const handleRemoveItem = (productId) => {
    setCartItems(cartItems.filter((item) => item.productId !== productId));
    // TODO: Remove item in backend
  };

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (loading) {
    return (
      <div className="p-6 max-w-4xl mx-auto mt-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">🛒 Your Cart</h1>
        <p className="text-gray-600">Loading cart items...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 max-w-4xl mx-auto mt-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">🛒 Your Cart</h1>
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto mt-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">🛒 Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-600 mb-4">Your cart is empty.</p>
          <button 
            onClick={() => navigate("/customer")}
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
          >
            Browse Products
          </button>
        </div>
      ) : (
        <div className="bg-white p-4 rounded-lg shadow-md">
          {cartItems.map((item) => (
            <div key={item.productId} className="flex justify-between items-center border-b py-3">
              <div>
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-500">${item.price.toFixed(2)} each</p>
                <p className="text-sm text-gray-500">Category: {item.category}</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <button
                    className="px-2 py-1 bg-gray-200 rounded-l hover:bg-gray-300"
                    onClick={() => handleQuantityChange(item.productId, item.quantity - 1)}
                  >
                    -
                  </button>
                  <span className="px-3">{item.quantity}</span>
                  <button
                    className="px-2 py-1 bg-gray-200 rounded-r hover:bg-gray-300"
                    onClick={() => handleQuantityChange(item.productId, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <p className="font-bold w-24 text-right">${(item.price * item.quantity).toFixed(2)}</p>
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => handleRemoveItem(item.productId)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* Total Price & Checkout */}
          <div className="mt-6 flex justify-between items-center">
            <h2 className="text-xl font-bold">Total: ${totalPrice.toFixed(2)}</h2>
            <div className="space-x-4">
              <button 
                onClick={() => navigate("/customer")}
                className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600"
              >
                Continue Shopping
              </button>
              <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
