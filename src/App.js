import Navbar from "./Navbar";
import ProductDetails from "./pages/ProductDetails";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import { Route, Routes } from "react-router-dom";
import Search from "./pages/Search";

function App() {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list/:id" element={<ProductDetails />} />
          <Route path="/list" element={<ProductList />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
