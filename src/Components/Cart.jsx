// function Cart({ cart }) {
//   return (
//     <div className="w-1/3 bg-white p-4 rounded-lg shadow-lg">
//       <h2 className="text-xl font-bold">🛒 Your Cart</h2>
//       {cart.length === 0 ? (
//         <p className="text-gray-500">Your cart is empty.</p>
//       ) : (
//         cart.map((item, index) => (
//           <div key={index} className="flex justify-between border-b py-2">
//             <span>{item.name}</span>
//             <span className="font-semibold">${item.price.toFixed(2)}</span>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }

// export default Cart;

import React from "react";

const Cart = ({ cart }) => {
  return (
    <div className="bg-gray-900 p-4 text-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold">🛒 Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-400">No pizzas in the cart.</p>
      ) : (
        <ul className="mt-3">
          {cart.map((item, index) => (
            <li key={index} className="border-b border-gray-700 py-2">
              {item.name} - ${item.price.toFixed(2)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
