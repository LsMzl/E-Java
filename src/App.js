import "./App.css";
import { Cart } from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";

import { Footer } from "./components/navigation/Footer";
import NavBar from "./components/navigation/Navbar";
import { Order } from "./components/Order/Order";
import { OrderDetails } from "./components/Order/OrderDetails";
import Product from "./components/Product/Product";
import ProductDetails from "./components/ProductDetails/ProductDetails";

import HomePage from "./pages/home/HomePage";

function App() {
   return (
      <div className="App">
         <NavBar />
         <div className="max-w-7xl mx-auto md:px-2">
            {/* <HomePage/> */}
            {/* <Product /> */}
            {/* <ProductDetails />  */}
            {/* <Cart/> */}
            {/* <Checkout /> */}
            <OrderDetails/>
         </div>
         <Footer />
      </div>
   );
}

export default App;
