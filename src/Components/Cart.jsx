import React from "react";
import { Link } from "react-router-dom";

const CartPage = ({ cart, removeFromCart }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-400">Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cart.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center border-b border-gray-700 py-2"
              >
                <span>
                  {item.name} - ${item.price.toFixed(2)}
                </span>
                <button
                  onClick={() => removeFromCart(index)}
                  className="bg-red-400 text-white px-2 py-1 rounded-md hover:bg-red-500"
                >
                  ❌
                </button>
              </li>
            ))}
          </ul>

          <h3 className="text-xl font-semibold mt-4">
            Total: ${total.toFixed(2)}
          </h3>
          <button className="bg-green-500 px-4 py-2 rounded-lg mt-4 hover:bg-green-600">
            Checkout
          </button>
        </div>
      )}

      <Link to="/" className="block mt-6 text-blue-400 hover:underline">
        ← Back to Menu
      </Link>
    </div>
  );
};

export default CartPage;
