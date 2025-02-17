// import PizzaCard from "./PizzaCard";

// const pizzas = [
//   { id: 1, name: "Margherita", price: 9.99, image: "/pizza1.jpg" },
//   { id: 2, name: "Pepperoni", price: 11.99, image: "/pizza2.jpg" },
//   { id: 3, name: "Veggie", price: 10.99, image: "/pizza3.jpg" },
// ];

// function PizzaList({ addToCart }) {
//   return (
//     <div className="w-2/3 grid grid-cols-3 gap-4">
//       {pizzas.map((pizza) => (
//         <PizzaCard key={pizza.id} pizza={pizza} addToCart={addToCart} />
//       ))}
//     </div>
//   );
// }

// export default PizzaList;


// import React from "react";

// const PizzaList = () => {
//   return (
//     <div className="grid grid-cols-3 gap-4">
//       <div className="bg-red-500 p-5 rounded-lg">Pizza 1</div>
//       <div className="bg-green-500 p-5 rounded-lg">Pizza 2</div>
//       <div className="bg-blue-500 p-5 rounded-lg">Pizza 3</div>
//     </div>
//   );
// };

// export default PizzaList;

import React from "react";
import PizzaCard from "./PizzaCard";

const pizzas = [
  { id: 1, name: "Margherita", price: 12.99, image: "/pizza1.jpg" },
  { id: 2, name: "Pepperoni", price: 14.99, image: "/pizza2.jpg" },
  { id: 3, name: "BBQ Chicken", price: 16.99, image: "/pizza3.jpg" },
];

const PizzaList = ({ addToCart }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-5">
      {pizzas.map((pizza) => (
        <PizzaCard key={pizza.id} pizza={pizza} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default PizzaList;
