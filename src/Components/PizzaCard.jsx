// function PizzaCard({ pizza, addToCart }) {
//   return (
//     <div className="bg-white p-4 rounded-lg shadow-lg">
//       <img
//         src={pizza.image}
//         alt={pizza.name}
//         className="w-full h-40 object-cover rounded-md"
//       />
//       <h3 className="text-lg font-semibold mt-2">{pizza.name}</h3>
//       <p className="text-gray-700">${pizza.price.toFixed(2)}</p>
//       <button
//         className="mt-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
//         onClick={() => addToCart(pizza)}
//       >
//         Add to Cart
//       </button>
//     </div>
//   );
// }

// export default PizzaCard;


import React from "react";

const PizzaCard = ({ pizza, addToCart }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-xl shadow-lg text-white">
      <img
        src={pizza.image}
        alt={pizza.name}
        className="w-full h-40 object-cover rounded-md"
      />
      <h2 className="text-xl font-bold mt-2">{pizza.name}</h2>
      <p className="text-lg">${pizza.price.toFixed(2)}</p>
      <button
        onClick={() => addToCart(pizza)}
        className="bg-red-500 text-white px-4 py-2 rounded-lg mt-2 w-full hover:bg-red-600"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default PizzaCard;
