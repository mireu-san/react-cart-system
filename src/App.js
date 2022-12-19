import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Shop } from "./pages/shop/Shop";
import { Cart } from "./pages/cart/Cart";
import { DataContextProvider } from "./components/context/DataContext";

function App() {
  return (
    <div className="App">
      <DataContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </DataContextProvider>
      <footer>
        Copyright &copy; Chesed Kim. All Rights Reserved, except contents of
        each item on the page.
      </footer>
    </div>
  );
}

export default App;
