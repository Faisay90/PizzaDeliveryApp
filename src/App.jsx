// // import { useState } from "react";
// // import PizzaList from "./Components/PizzaList";
// // import Cart from "./Components/Cart";
// // import PizzaCard from "./Components/PizzaCard";
// // import "./App.css";
// // import "./index.css";
// // import React from "react";

// // function App() {
// //   const [cart, setCart] = useState([]);

// //   const addToCart = (pizza) => {
// //     setCart([...cart, pizza]);
// //   };

// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
// //       <h1 className="text-3xl font-bold">Pizza Delivery App 🍕</h1>
// //     </div>
// //   );
// // }


// // <div className="App">
// //   <Cart />,
// //   <PizzaList/>,
// //   <PizzaCard/>,
// // </div>;

// // export default App;


// import React from "react";
// import PizzaList from "./Components/PizzaList"; // ✅ Check this path!

// const App = () => {
//   return (
//     <div className="text-white p-5">
//       <h1 className="text-3xl font-bold text-center my-4">
//         Pizza Delivery App 🍕
//       </h1>
//       <PizzaList /> {/* ✅ This must exist! */}
//     </div>
//   );
// };

// export default App;

import React, { useState } from "react";
import Navbar from "./Components/NavBar";
import PizzaList from "./Components/PizzaList";
import Cart from "./Components/Cart";
import Footer from "./Components/footer";

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (pizza) => {
    setCart([...cart, pizza]);
  };

  return (
    <div className="bg-gray-950 min-h-screen text-white">
      <Navbar />
      <div className="max-w-5xl mx-auto p-5">
        <h1 className="text-4xl font-bold text-center my-6">
          Pizza Delivery App 🍕
        </h1>
        <PizzaList addToCart={addToCart} />
        <Cart cart={cart} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
