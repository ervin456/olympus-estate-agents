import Navbar from "./Navbar";
import ProductDetails from "./pages/ProductDetails";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import { Route, Routes } from "react-router-dom";
import Search from "./pages/Search";

function App() {
  return (
    <>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
        ;
      </head>
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
